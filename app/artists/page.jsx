import styles from "./page.module.css";

const sixHours = 1000 * 60 * 60 * 6;
export const revalidate = sixHours;

async function getAllArtists() {
  return fetch(process.env.REACT_APP_WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          posts(first: 999999) {
            nodes {
              details {
                artist
              }
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => data.posts.nodes);
}

export default async function ArtistsPage() {
  const artists = await getAllArtists();
  // Remove duplicate artists
  const set = new Set();
  artists.forEach((artist) => {
    set.add(artist.details.artist);
  });
  // Sort the artists in alphabetical order
  const filteredArtistsData = [...set].sort();

  return (
    <div className={styles.container}>
      {filteredArtistsData.map((artist, idx) => (
        <div key={idx}>
          {idx === 0 && <b>{artist[0]}</b>}
          {idx > 0 && artist[0] !== filteredArtistsData[idx - 1][0] && (
            <b>{artist[0]}</b>
          )}
          <div className={styles.artist}>{artist}</div>
        </div>
      ))}
    </div>
  );
}
