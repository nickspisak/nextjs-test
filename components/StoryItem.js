import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { grphCMSImageLoader } from "../util";
import storyStyles from "../styles/Story.module.css";
const StoryItem = ({story}) => {  
  return (
    <Link href={`/story/${story.url}`}>
       <a className={storyStyles.card}>
        <h2>{story.title}</h2>
        <div className="image-wrapper">
        
        <Image
          loader={grphCMSImageLoader}
          alt={story.title}
          src={story.cover}
          height={500}
          width={350}
        />
        </div>
        <strong>
          Genres:{story.genres}
        </strong>
        <p>{story.description}</p>
      </a>
    </Link>

  );
};
export default StoryItem;
