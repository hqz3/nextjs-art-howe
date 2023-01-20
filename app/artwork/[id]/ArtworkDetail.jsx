import styles from "./ArtworkDetail.module.css";

export default function ArtworkDetail({ artwork }) {
  return (
    <div className={styles.container}>
      <div id="artist">{artwork.details.artist.toUpperCase()}</div>
      <br />
      <div className="title">{artwork.title}</div>
      <div id="year">{artwork.details.year}</div>
      <br />
      <b>Exhibition</b>
      <div id="exhibition">{artwork.details.exhibition}</div>
      <br />
      <b>Venue</b>
      <div id="venue">{artwork.details.venue}</div>
      <br />
      <b>Date Seen</b>
      <div>{artwork.details.dateSeen.replace(/[/]/g, ".")}</div>
      <br />
      <b>Tags</b>
      <div>
        {artwork.tags.edges.map((tag, idx) => {
          if (idx === artwork.tags.edges.length - 1) {
            return <span id="tag" key={idx}>{`${tag.node.name}`}</span>;
          }
          return <span id="tag" key={idx}>{`${tag.node.name}; `}</span>;
        })}
      </div>
      <br />
      <b>Hi-res Link</b>
      <a href={artwork.details.link}>{artwork.details.link}</a>
    </div>
  );
}
