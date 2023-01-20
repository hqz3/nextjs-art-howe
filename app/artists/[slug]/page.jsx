import Mosaic from "@/app/Mosaic";
import getSearchTerm from "@/queries/getSearchTerm";
import generateMosaicData from "@/utils/generateMosaicData";

export const revalidate = process.env.REVALIDATE_TIME;

export default async function ArtistPage({ params: { slug } }) {
  const query = slug.split("-").join(" ");
  const mosaicData = await generateMosaicData(
    getSearchTerm(query, "THUMBNAIL"),
    getSearchTerm(query, "MEDIUM")
  );

  if (mosaicData) {
    return <Mosaic mosaicData={mosaicData} />;
  }
  return <div></div>;
}
