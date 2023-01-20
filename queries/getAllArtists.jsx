export default async function getAllArtists() {
  return fetch(process.env.REACT_APP_WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          posts(first: 999999) {
            nodes {
              details {
                artist
              }
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => data.posts.nodes);
}
