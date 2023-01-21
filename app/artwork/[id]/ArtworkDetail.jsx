import styles from "./ArtworkDetail.module.css";
import Link from "next/link";

export default function ArtworkDetail({ artwork }) {
  return (
    <div className={styles.container}>
      <Link href={"/artists/" + artwork.details.artist} id="artist">
        {artwork.details.artist.toUpperCase()}
      </Link>
      <br />
      <div className="title">{artwork.title}</div>
      <Link href={"/search/" + artwork.details.year} id="year">
        {artwork.details.year}
      </Link>
      <br />
      <b>Exhibition</b>
      <Link href={"/search/" + artwork.details.exhibition} id="exhibition">
        {artwork.details.exhibition}
      </Link>
      <br />
      <b>Venue</b>
      <Link href={"/search/" + artwork.details.venue} id="venue">
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
                href={"/search/" + tag.node.name}
                id="tag"
                key={idx}
              >{`${tag.node.name}`}</Link>
            );
          }
          return (
            <Link
              href={"/search/" + tag.node.name}
              id="tag"
              key={idx}
            >{`${tag.node.name}; `}</Link>
          );
        })}
      </div>
      <br />
      <b>Hi-res Link</b>
      <a
        id="sourceLink"
        className={styles.sourceLink}
        href={artwork.details.link}
      >
        {artwork.details.link}
      </a>
    </div>
  );
}
