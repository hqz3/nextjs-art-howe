import ArtworkCarousel from "./ArtworkCarousel";
import ArtworkDetail from "./ArtworkDetail";
import styles from "./page.module.css";

export const revalidate = process.env.REVALIDATE_TIME;

export async function generateStaticParams() {
  const artworks = await getAllArtworks();
  return artworks.map((artwork) => ({
    id: `${artwork.id}`,
  }));
}

export default async function ArtworkPage({ params: { id } }) {
  const artwork = await getArtwork(id);
  if (!artwork.post || !artwork.mediaItems) return <div></div>;

  const images = artwork.mediaItems.edges.map((item) => ({
    original: item.node.mediaItemUrl,
  }));

  return (
    <div className={styles.container}>
      <ArtworkCarousel images={images} />
      <ArtworkDetail artwork={artwork.post} />
    </div>
  );
}

async function getAllArtworks() {
  return fetch(process.env.REACT_APP_WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          posts(first: 10) {
            nodes {
              postId
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data.posts.nodes;
    });
}

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
                mediaItemUrl
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
