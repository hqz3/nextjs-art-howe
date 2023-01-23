export default async function getArtwork(id) {
  return fetch(process.env.REACT_APP_WP_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          post(id: ${id}, idType: DATABASE_ID) {
            title
            tags {
              edges {
                node {
                  name
                  tagId
                }
              }
            }
            details {
              artist
              dateSeen
              exhibition
              link
              venue
              year
            }
          }
          mediaItems(where: {parent: ${id}, orderby: {field: TITLE, order: ASC}}) {
            edges {
              node {
                mediaItemUrl
              }
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data;
    });
}
