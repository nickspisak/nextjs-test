import StoryList from "../components/StoryList";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import StoryItem from "../components/StoryItem";
import AppContext from "../context/appContext";
import { useState } from "react";
export default function Home({ stories, genres }) {
  
  const [myStories, setMyStories] = useState(stories);
  console.log(stories);
  return (
     <div className={styles.container}>
      <AppContext.Provider value = {{
        stories : myStories,
        setMyStories : setMyStories, 
        genres : genres 
      }}>
        <Layout />
      </AppContext.Provider>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://readspishstories.com/api/stories");  
  const stories = await response.json();
  const genres = [...new Set(stories.map((story) => story.genres.split(', ')).flat())];
  console.log(genres);
  return {
    props: {
      stories,
      genres,
    }
  }
}
