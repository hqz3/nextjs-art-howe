import styles from "./page.module.css";

export const revalidate = process.env.REVALIDATE_TIME;

async function getAllCategories() {
  return fetch(process.env.REACT_APP_WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          tags(first: 9999999) {
            nodes {
              name
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then(({ data }) => data.tags.nodes);
}

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
          <div className={styles.tag}>{tag.name}</div>
        </div>
      ))}
    </div>
  );
}
