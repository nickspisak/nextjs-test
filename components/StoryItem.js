import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { grphCMSImageLoader } from "../util";
import storyStyles from "../styles/Story.module.css";
const StoryItem = ({story}) => {  
  const matureCheck = () => {
    if(story.mature > 0) {
      return <h2>{story.title}<span className={storyStyles.mature}>M</span></h2>
    } else {
      return <h2>{story.title}</h2>
    }
  }
  return (
    <Link href={`/story/${story.url}`}>
       <a className={storyStyles.card}>
        {matureCheck()}
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
