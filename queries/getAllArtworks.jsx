export default async function getAllArtworks() {
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
