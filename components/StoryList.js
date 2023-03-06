import StoryItem from "./StoryItem";
import storyStyles from "../styles/Story.module.css";

const StoryList = ({ stories }) => {
 const storyGenerator = () => {
  return (
    <>
      {
        stories.map(story => {
          return <StoryItem key = {story} story = {story} />
        })
      }
    </>
  )
 }
  return (
    <div className={storyStyles.grid}>
   {storyGenerator()}
    </div>
  );
};
export default StoryList;
