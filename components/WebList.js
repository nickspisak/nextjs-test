import WebItem from "./WebItem";
import storyStyles from "../styles/Story.module.css";

const WebList = ({ webStories }) => {
  return (
    <div className={storyStyles.grid}>
      {webStories.map((web) => (
        <WebItem web={web} key={story} />
      ))}
    </div>
  );
};
export default WebList;
