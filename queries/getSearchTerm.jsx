export default async function getSearchTerm(query, size) {
  return fetch(process.env.REACT_APP_WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          posts(first: 999999, where: {search: "${query}"}) {
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
    .then(({ data }) => data.posts.nodes);
}
