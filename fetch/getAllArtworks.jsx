import { ALL_ARTWORKS_QUERY } from "@/graphql/queries";

export default async function getAllArtworks() {
  return fetch(process.env.REACT_APP_WP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: ALL_ARTWORKS_QUERY,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data.posts.nodes;
    });
}
