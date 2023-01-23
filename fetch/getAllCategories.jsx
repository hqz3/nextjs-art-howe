import { ALL_CATEGORIES_QUERY } from "@/graphql/queries";

export default async function getAllCategories() {
  return fetch(process.env.REACT_APP_WP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: ALL_CATEGORIES_QUERY,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => data.tags.nodes);
}
