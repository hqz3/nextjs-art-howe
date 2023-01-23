import Mosaic from "@/app/Mosaic";
import getSearchTerm from "@/fetch/getSearchQuery";
import generateMosaicData from "@/utils/generateMosaicData";

export default async function CategoryPage({ params: { slug } }) {
  const query = decodeURIComponent(slug);
  const mosaicData = await generateMosaicData(
    getSearchTerm(query, "THUMBNAIL"),
    getSearchTerm(query, "MEDIUM")
  );

  if (mosaicData) {
    return <Mosaic mosaicData={mosaicData} randomize={false} />;
  }
}
