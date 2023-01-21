import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.artists_container} data-artists>
          <Link href="/artists" className={styles.artists} data-artists>
            Artists
          </Link>
        </div>
        <div className={styles.logo_container}>
          <Link href="/" className={styles.logo} data-logo>
            <span style={{ color: "var(--blue)" }}>A</span>
            <span style={{ color: "var(--orange)" }}>R</span>
            <span style={{ color: "var(--blue)" }}>T</span>
            <span> </span>
            <span style={{ color: "var(--orange)" }}>H</span>
            <span style={{ color: "var(--blue)" }}>O</span>
            <span style={{ color: "var(--orange)" }}>W</span>
            <span style={{ color: "var(--blue)" }}>E</span>
          </Link>
        </div>
        <div className={styles.categories_container} data-categories>
          <Link
            href="/categories"
            className={styles.categories}
            data-categories
          >
            Categories
          </Link>
        </div>
      </div>
    </>
  );
}
