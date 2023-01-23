import styles from "./page.module.css";
import Mosaic from "@/app/Mosaic";
import getSearchTerm from "@/fetch/getSearchQuery";
import generateMosaicData from "@/utils/generateMosaicData";

export default async function SearchPage({ params: { query } }) {
  const decodedQuery = decodeURIComponent(query);

  const mosaicData = await generateMosaicData(
    getSearchTerm(decodedQuery, "THUMBNAIL"),
    getSearchTerm(decodedQuery, "MEDIUM")
  );

  if (mosaicData.length) {
    return <Mosaic mosaicData={mosaicData} randomize={false} />;
  } else return <div className={styles.notFound}>No results found</div>;
}
