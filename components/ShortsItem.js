import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { grphCMSImageLoader } from "../util";
import storyStyles from "../styles/Story.module.css";
const ShortsItem = ({short}) => {  
  const matureCheck = () => {
    if(short.mature > 0) {
      return <h2>{short.title}<span className={storyStyles.mature}>M</span></h2>
    } else {
      return <h2>{short.title}</h2>
    }
  }
  return (
    <Link href={`shortstories/${short.url}`}>
       <a className={storyStyles.card}>
        {matureCheck()}
        <div className="image-wrapper">
        
        <Image
          loader={grphCMSImageLoader}
          alt={short.title}
          src={short.cover}
          key={short.id}
          height={500}
          width={350}
        />
        </div>
        <strong>
          Genres:{short.genres}
        </strong>
        <p>{short.description}</p>
      </a>
    </Link>

  );
};
export default ShortsItem;
