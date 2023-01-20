import Mosaic from "@/app/Mosaic";
import getSearchTerm from "@/queries/getSearchTerm";
import generateMosaicData from "@/utils/generateMosaicData";

export default async function CategoryPage({ params: { slug } }) {
  const query = slug.split("-").join(" ");
  const mosaicData = await generateMosaicData(
    getSearchTerm(query, "THUMBNAIL"),
    getSearchTerm(query, "MEDIUM")
  );

  if (mosaicData) {
    return <Mosaic mosaicData={mosaicData} />;
  }
}
