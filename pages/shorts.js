import StoryList from "../components/StoryList";
import styles from "../styles/Home.module.css";
import ShortsLayout from "../components/ShortsLayout";
import StoryItem from "../components/StoryItem";
import AppContext from "../context/appContext";
import { useState } from "react";
export default function Home({ shorts }) {
  
  const [myShorts, setMyShorts] = useState(shorts);
  console.log(shorts);
  return (
     <div className={styles.container}>
      <AppContext.Provider value = {{
        shorts : myShorts,
        setMyShorts : setMyShorts
      }}>
        <ShortsLayout />
      </AppContext.Provider>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://readspishstories.com/api/shorts");  
  const shorts = await response.json();
  return {
    props: {
      shorts : shorts
    }
  }
}
