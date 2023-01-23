import styles from "./page.module.css";
import ArtworkCarousel from "./ArtworkCarousel";
import ArtworkDetail from "./ArtworkDetail";
import getArtwork from "@/fetch/getArtwork";
import getAllArtworks from "@/fetch/getAllArtworks";

export const revalidate = process.env.REVALIDATE_TIME;

export default async function ArtworkPage({ params: { id } }) {
  const artwork = await getArtwork(id);
  if (!artwork || !artwork.post || !artwork.mediaItems) return <div></div>;

  const images = artwork.mediaItems.edges.map((item) => ({
    original: item.node.mediaItemUrl,
  }));

  return (
    <div className={styles.container}>
      <ArtworkCarousel images={images} />
      <ArtworkDetail artwork={artwork.post} />
    </div>
  );
}
