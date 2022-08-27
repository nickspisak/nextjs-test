import Link from "next/link";
import { useRouter } from "next/router";
import { grphCMSImageLoader } from "../util";
import storyStyles from "../styles/Story.module.css";
const StoryItem = ({ story }) => {
  return (
    <Link href={`/story/${story.slug}`}>
      <a className={storyStyles.card}>
        <h2>{story.title}</h2>
        <img
          loader={grphCMSImageLoader}
          alt={story.title}
          src={story.cover.url}
          height={500}
          width={350}
        />
        <strong>
          <p>Genres:{story.genres}</p>
        </strong>
        <p>{story.description}</p>
      </a>
    </Link>
  );
};
export default StoryItem;
