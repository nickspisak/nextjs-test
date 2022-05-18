import StoryList from "../components/StoryList";
import styles from "../styles/Home.module.css";
import { server } from "../config/index";

export default function Home({ stories }) {
  return (
    <div className={styles.container}>
      <StoryList stories={stories} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/stories`);

  const stories = await res.json();

  return {
    props: {
      stories,
    },
  };
};
