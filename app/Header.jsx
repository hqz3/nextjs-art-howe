"use client";
import styles from "../styles/Header.module.css";

export default function Header() {
  function handleHeaderClick(e) {}

  return (
    <>
      <div className={styles.container} onClick={handleHeaderClick}>
        <div className={styles.artists_container} data-artists>
          <div className={styles.artists} data-artists>
            Artists
          </div>
        </div>
        <div className={styles.logo_container}>
          <div className={styles.logo} data-logo>
            <span style={{ color: "var(--blue)" }}>A</span>
            <span style={{ color: "var(--orange)" }}>R</span>
            <span style={{ color: "var(--blue)" }}>T</span>
            <span> </span>
            <span style={{ color: "var(--orange)" }}>H</span>
            <span style={{ color: "var(--blue)" }}>O</span>
            <span style={{ color: "var(--orange)" }}>W</span>
            <span style={{ color: "var(--blue)" }}>E</span>
          </div>
        </div>
        <div className={styles.categories_container} data-categories>
          <div className={styles.categories} data-categories>
            Categories
          </div>
        </div>
      </div>
    </>
  );
}
