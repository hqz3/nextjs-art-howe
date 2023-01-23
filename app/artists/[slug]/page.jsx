import Mosaic from "@/app/Mosaic";
import getSearchTerm from "@/fetch/getSearchQuery";
import generateMosaicData from "@/utils/generateMosaicData";

export const revalidate = process.env.REVALIDATE_TIME;

export default async function ArtistPage({ params: { slug } }) {
  const query = decodeURIComponent(slug);

  const mosaicData = await generateMosaicData(
    getSearchTerm(query, "THUMBNAIL"),
    getSearchTerm(query, "MEDIUM")
  );

  if (mosaicData) {
    return <Mosaic mosaicData={mosaicData} randomize={false} />;
  }
}
