import styles from "./ArtworkCarouselSkeleton.module.css";

export default function ArtworkCarouselSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.fullscreen}></div>
    </div>
  );
}
