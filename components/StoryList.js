import StoryItem from "./StoryItem";
import storyStyles from "../styles/Story.module.css";

const StoryList = ({ stories }) => {
  return (
    <div className={storyStyles.grid}>
      {stories.map((story) => (
        <StoryItem story={story} key={story} />
      ))}
    </div>
  );
};
export default StoryList;
