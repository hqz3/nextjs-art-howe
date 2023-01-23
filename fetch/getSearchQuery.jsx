import { GET_SEARCH_QUERY } from "@/graphql/queries";

export default async function getSearchTerm(query, size) {
  return fetch(process.env.REACT_APP_WP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_SEARCH_QUERY,
      variables: {
        query,
        sourceSize: size,
        mediaSize: size,
      },
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => data.posts.nodes);
}
