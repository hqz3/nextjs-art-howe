import styles from "./page.module.css";
import Link from "next/link";
import getAllCategories from "@/queries/getAllCategories";

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
          <Link href={"/categories/" + tag.name} className={styles.tag}>
            {tag.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
