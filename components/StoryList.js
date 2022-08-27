import StoryItem from "./StoryItem";
import storyStyles from "../styles/Story.module.css";

const StoryList = ({ stories }) => {
  return (
    <div className={storyStyles.grid}>
      {stories.map((story, index) => (
        <StoryItem story={story.node} key={index} />
      ))}
    </div>
  );
};
export default StoryList;
