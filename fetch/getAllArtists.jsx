import { ALL_ARTISTS_QUERY } from "@/graphql/queries";

export default async function getAllArtists() {
  return fetch(process.env.REACT_APP_WP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: ALL_ARTISTS_QUERY,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => data.posts.nodes);
}
