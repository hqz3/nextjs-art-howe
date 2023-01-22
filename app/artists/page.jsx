import styles from "./page.module.css";
import Link from "next/link";
import getAllArtists from "@/queries/getAllArtists";

export const revalidate = process.env.REVALIDATE_TIME;

export default async function ArtistsPage() {
  const artists = await getAllArtists();
  // Remove duplicate artists
  const set = new Set();
  artists.forEach((artist) => {
    set.add(artist.details.artist);
  });
  // Sort the artists in alphabetical order
  const filteredArtistsData = [...set].sort();

  return (
    <>
      <div className={styles.container}>
        {filteredArtistsData.map((artist, idx) => (
          <div key={idx}>
            {idx === 0 && <b>{artist[0]}</b>}
            {idx > 0 && artist[0] !== filteredArtistsData[idx - 1][0] && (
              <b>{artist[0]}</b>
            )}
            <Link
              href={"/artists/" + encodeURIComponent(artist)}
              className={styles.artist}
            >
              {artist}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
