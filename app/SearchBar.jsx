"use client";
import styles from "./SearchBar.module.css";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const searchBarElement = useRef(null);
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    const query = searchBarElement.current.value;
    searchBarElement.current.value = "";
    router.push("/search/" + query);
  }

  return (
    <form className={styles.searchbar} onSubmit={handleSearch}>
      <input placeholder="Search" ref={searchBarElement} />
    </form>
  );
}
