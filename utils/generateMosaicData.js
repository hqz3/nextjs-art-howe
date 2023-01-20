export default function generateMosaicData(thumbnail, medium) {
  // Place post data, thumbnail URL and medium image URL into an array
  return thumbnail.reduce((arr, post, idx) => {
    if (post.featuredImage?.node.sourceUrl) {
      const { databaseId, title } = post;
      arr.push({
        id: databaseId,
        title,
        thumbnail: post.featuredImage.node.sourceUrl,
        medium: medium[idx].featuredImage.node.sourceUrl,
        height: medium[idx].featuredImage.node.mediaDetails.sizes[0].height,
        width: medium[idx].featuredImage.node.mediaDetails.sizes[0].width,
      });
    }
    return arr;
  }, []);
}
