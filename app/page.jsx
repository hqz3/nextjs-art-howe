import Mosaic from "./Mosaic";
import generateMosaicData from "@/utils/generateMosaicData";

async function fetchMosaic(size) {
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
              featuredImage {
                node {
                  sourceUrl(size: ${size})
                  mediaDetails {
                    sizes(include: ${size}) {
                      height
                      width
                    }
                  }
                }
              }
              databaseId
              title
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

export default async function HomePage() {
  const [thumbnail, medium] = await Promise.all([
    fetchMosaic("THUMBNAIL"),
    fetchMosaic("MEDIUM"),
  ]).then((res) => res);
  const mosaicData = generateMosaicData(thumbnail, medium);

  if (mosaicData) {
    return <Mosaic mosaicData={mosaicData} />;
  }
}
