import { MOSAIC_QUERY } from "@/graphql/queries";

export default async function getMosaic(size) {
  return fetch(process.env.REACT_APP_WP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: MOSAIC_QUERY,
      variables: {
        sourceSize: size,
        mediaSize: size,
      },
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data.posts.nodes;
    });
}
