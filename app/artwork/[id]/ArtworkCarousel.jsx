"use client";
import styles from "./ArtworkCarousel.module.css";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ArtworkCarousel({ images }) {
  return (
    <div className={styles.container}>
      <ReactImageGallery
        items={images}
        showPlayButton={false}
        showThumbnails={false}
      />
    </div>
  );
}