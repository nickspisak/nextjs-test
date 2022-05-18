import Link from "next/link";
import storyStyles from "../styles/Story.module.css";
import WebList from "../components/WebList";
import { server } from "../config/index";
const webcomics = ({ web }) => {
  return (
    <div>
      <h1>Webcomics</h1>

      <WebList web={web} />
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/webcomics`);
  const webStories = await res.json();

  return {
    props: {
      webStories,
    },
  };
};
export default webcomics;
