import StoryList from "../components/StoryList";
import styles from "../styles/Home.module.css";

//import { getStories } from "../services";
import { getStories } from "../controller/stories";
export default function Home({ stories }) {
  return (
    <div className={styles.container}>
      <StoryList stories={stories} />
      <button>Submit story</button>
    </div>
  );
}
export const getStaticProps = async () => {
  const stories = (await getStories()) || [];

  return {
    props: {
      stories,
    },
  };
};
