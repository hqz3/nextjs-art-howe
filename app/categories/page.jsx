import Link from "next/link";
import styles from "./page.module.css";
import getAllCategories from "@/queries/getAllCategories";
import convertToSlug from "@/utils/convertToSlug";

export const revalidate = process.env.REVALIDATE_TIME;

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className={styles.container}>
      {categories.map((tag, idx) => (
        <div key={idx}>
          {idx === 0 && <b>{tag.name[0]}</b>}
          {idx > 0 && tag.name[0] !== categories[idx - 1].name[0] && (
            <b>{tag.name[0]}</b>
          )}
          <Link
            href={"/categories/" + convertToSlug(tag.name)}
            className={styles.tag}
          >
            {tag.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
