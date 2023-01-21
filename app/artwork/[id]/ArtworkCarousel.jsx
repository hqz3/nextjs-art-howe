"use client";
import styles from "./ArtworkCarousel.module.css";
import { useEffect, useState } from "react";
import ArtworkCarouselSkeleton from "./ArtworkCarouselSkeleton";
import ReactImageGallery from "react-image-gallery";

export default function ArtworkCarousel({ images }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let toLoad = images.length;
    images.forEach((image) => {
      const img = new Image();
      img.src = image.original;
      img.onload = () => {
        toLoad--;
        if (!toLoad) setLoading(false);
      };
    });
  }, [images]);

  return (
    <div className={styles.container}>
      {loading && <ArtworkCarouselSkeleton />}
      {!loading && (
        <ReactImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={false}
        />
      )}
    </div>
  );
}
