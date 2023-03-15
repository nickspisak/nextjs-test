import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { grphCMSImageLoader } from "../util";
import storyStyles from "../styles/Story.module.css";
const StoryItem = ({story}) => {
  console.log({story})
  
  return (
    <Link href={"/"}>
       <a className={storyStyles.card}>
        <h2>{story.title}</h2>
        <Image
          loader={grphCMSImageLoader}
          alt={story.title}
          src={story.cover}
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
