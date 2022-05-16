import ArticleList from "../components/ArticleList";
import styles from "../styles/Home.module.css";
import { server } from "../config/index";
export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <ArticleList articles={articles} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
