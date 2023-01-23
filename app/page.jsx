import Mosaic from "./Mosaic";
import getMosaic from "@/fetch/getMosaic";
import generateMosaicData from "@/utils/generateMosaicData";

export const revalidate = process.env.REVALIDATE_TIME;

export default async function HomePage() {
  const mosaicData = await generateMosaicData(
    getMosaic("THUMBNAIL"),
    getMosaic("MEDIUM")
  );

  if (mosaicData) {
    return <Mosaic mosaicData={mosaicData} randomize={true} />;
  }
}
