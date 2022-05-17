import Link from "next/link";
import storyStyles from "../styles/Story.module.css";
const StoryItem = ({ story }) => {
  return (
    <Link href="/story/[id]" as={`/story/${story.id}`}>
      <a className={storyStyles.card}>
        <h2>{story.title}</h2>
        <img src={story.image} />
        <strong>
          <p>Genres:{story.genres}</p>
        </strong>
        <p>{story.body}</p>
      </a>
    </Link>
  );
};
export default StoryItem;
