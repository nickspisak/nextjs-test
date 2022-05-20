import StoryList from "../components/StoryList";
import styles from "../styles/Home.module.css";
import { server } from "../config";
import { useEffect, useState } from "react";
export default function Home({ stories }) {
  // const [stories, setStories] = useState([]);
  // const fetchStories = async () => {
  //   const response = await fetch("/api/story");
  //   const data = await response.json();
  //   setStories(data);
  // };
  // useEffect(() => {
  //   fetchStories();
  // }, []);
  return (
    <div className={styles.container}>
      <StoryList stories={stories} />
    </div>
  );
}
export const getStaticProps = async () => {
  const req = await fetch(`${server}/api/stories`);
  const data = await req.json();

  return {
    props: {
      stories: data,
    },
  };
};
// export async function getServerSideProps({ params }) {
//   const req = await fetch(`${server}/homepage.json`);
//   const data = await req.json();
//   return {
//     props: { stories: data },
//   };
// }
