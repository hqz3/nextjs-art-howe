import ArtworkCarousel from "./ArtworkCarousel";
import ArtworkDetail from "./ArtworkDetail";
import styles from "./Artwork.module.css";

async function getArtwork(id) {
  return fetch(process.env.REACT_APP_WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query ($id: ID!) {
          post(id: $id, idType: DATABASE_ID) {
            title
            tags {
              edges {
                node {
                  name
                  tagId
                }
              }
            }
            details {
              artist
              dateSeen
              exhibition
              link
              venue
              year
            }
          }
          mediaItems(where: {parent: $id, orderby: {field: TITLE, order: ASC}}) {
            edges {
              node {
                id
                mediaDetails {
                  sizes(include: _1536X1536) {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        id,
      },
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data;
    });
}

export default async function Artwork({ id }) {
  const artwork = await getArtwork(id);

  const images = artwork.mediaItems.edges.map((item) => ({
    original: item.node.mediaDetails.sizes[0].sourceUrl,
  }));

  return (
    <div className={styles.container}>
      <ArtworkCarousel images={images} />
      <ArtworkDetail artwork={artwork.post} />
    </div>
  );
}
