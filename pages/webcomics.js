import Link from "next/link";
import storyStyles from "../styles/Story.module.css";
import WebList from "../components/WebList";
import { webStories } from "../data";
const webcomics = () => {
  return (
    <div>
      <h1>Webcomics</h1>

      <WebList />
    </div>
  );
};
export default webcomics;
