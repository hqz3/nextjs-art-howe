export default async function getAllCategories() {
  return fetch(process.env.REACT_APP_WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          tags(first: 9999999) {
            nodes {
              name
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => data.tags.nodes);
}
