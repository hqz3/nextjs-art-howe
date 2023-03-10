import styles from "./ArtworkDetail.module.css";
import Link from "next/link";

export default function ArtworkDetail({ artwork }) {
  return (
    <div className={styles.container}>
      <Link
        href={"/artists/" + encodeURIComponent(artwork.details.artist)}
        className={styles.artist}
        prefetch={false}
      >
        {artwork.details.artist.toUpperCase()}
      </Link>
      <br />
      <div className={styles.title}>{artwork.title}</div>
      <Link
        href={"/search/" + encodeURIComponent(artwork.details.year)}
        prefetch={false}
      >
        {artwork.details.year}
      </Link>
      <br />
      <b>Exhibition</b>
      <Link
        href={"/search/" + encodeURIComponent(artwork.details.exhibition)}
        prefetch={false}
      >
        {artwork.details.exhibition}
      </Link>
      <br />
      <b>Venue</b>
      <Link
        href={"/search/" + encodeURIComponent(artwork.details.venue)}
        prefetch={false}
      >
        {artwork.details.venue}
      </Link>
      <br />
      <b>Date Seen</b>
      <div>{artwork.details.dateSeen.replace(/[/]/g, ".")}</div>
      <br />
      <b>Tags</b>
      <div>
        {artwork.tags.edges.map((tag, idx) => {
          if (idx === artwork.tags.edges.length - 1) {
            return (
              <Link
                href={"/search/" + encodeURIComponent(tag.node.name)}
                key={idx}
                prefetch={false}
              >{`${tag.node.name}`}</Link>
            );
          }
          return (
            <Link
              href={"/search/" + encodeURIComponent(tag.node.name)}
              key={idx}
              prefetch={false}
            >{`${tag.node.name}; `}</Link>
          );
        })}
      </div>
      <br />
      {artwork.details.link && (
        <>
          <b>Hi-res Link</b>
          <a
            id="sourceLink"
            className={styles.sourceLink}
            href={artwork.details.link}
          >
            {artwork.details.link}
          </a>
        </>
      )}
    </div>
  );
}
