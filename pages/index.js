import StoryList from "../components/StoryList";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import {sql_query} from "../services/db";
//import { getStories } from "../services";
//import { getStories } from "../controller/stories";
import StoryItem from "../components/StoryItem";
import AppContext from "../context/appContext";
import { useState } from "react";
export default function Home({ stories }) {
  
  const [myStories, setMyStories] = useState(stories);
  console.log({stories})
  return (
     <div className={styles.container}>
      {/* {stories.map((story) => <>
      <StoryItem story= {story} key={story.id}/>
      </>)} */}
      <AppContext.Provider value = {{
        stories : myStories,
        setMyStories : setMyStories
      }}>
        <Layout />
      </AppContext.Provider>
      <img src="covers/darkest.jpeg" height="500px" />
       <button>Submit story</button>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/stories")
  const stories = await response.json();
  console.log({stories})
  return {
    props: {
      stories : stories
    }
  }
}