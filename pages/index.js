import StoryList from "../components/StoryList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import {sql_query} from "../services/db";
//import { getStories } from "../services";
//import { getStories } from "../controller/stories";
export default function Home({ stories }) {

  return (
     <div className={styles.container}>
       <StoryList stories={stories} />
       <button>Submit story</button>
    </div>
  );
}
export async function getStaticProps(context) {
  try {
    const result = await sql_query(`
      SELECT * FROM stories
    `)
    let stories = JSON.parse(JSON.stringify(result))
    return {
      props: {stories}
    };
  } catch (e) {
    return {props: {stories:false}}
  }
}
