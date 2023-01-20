import Mosaic from "./Mosaic";
import fetchMosaic from "@/queries/getMosaic";
import generateMosaicData from "@/utils/generateMosaicData";

export const revalidate = process.env.REVALIDATE_TIME;

export default async function HomePage() {
  const mosaicData = await generateMosaicData(
    fetchMosaic("THUMBNAIL"),
    fetchMosaic("MEDIUM")
  );

  if (mosaicData) {
    return <Mosaic mosaicData={mosaicData} />;
  }
}
