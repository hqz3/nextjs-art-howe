export const MOSAIC_QUERY = `
  query getMosaic(
    $sourceSize: MediaItemSizeEnum
    $mediaSize: [MediaItemSizeEnum]
  ) {
    posts(first: 20) {
      nodes {
        featuredImage {
          node {
            sourceUrl(size: $sourceSize)
            mediaDetails {
              sizes(include: $mediaSize) {
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
`;

export const ALL_ARTISTS_QUERY = `
  query getAllArtists {
    posts(first: 999999) {
      nodes {
        details {
          artist
        }
      }
    }
  }
`;

export const ALL_CATEGORIES_QUERY = `
  query getAllCategories {
    tags(first: 9999999) {
      nodes {
        name
      }
    }
  }
`;

export const GET_SEARCH_QUERY = `
  query getSearchQuery(
    $query: String!
    $sourceSize: MediaItemSizeEnum
    $mediaSize: [MediaItemSizeEnum]
  ) {
    posts(first: 999999, where: { search: $query }) {
      nodes {
        featuredImage {
          node {
            sourceUrl(size: $sourceSize)
            mediaDetails {
              sizes(include: $mediaSize) {
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
`;
