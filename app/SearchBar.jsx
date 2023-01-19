"use client";
import { useRef } from "react";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
  const searchBarElement = useRef(null);

  function handleSearch(e) {
    e.preventDefault();
    searchBarElement.current.value = "";
  }

  return (
    <form className={styles.searchbar} onSubmit={handleSearch}>
      <input placeholder="Search" ref={searchBarElement} />
    </form>
  );
}
