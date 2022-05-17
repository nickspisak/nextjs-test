import Link from "next/link";
import storyStyles from "../styles/Story.module.css";
const WebItem = ({ web }) => {
  return (
    <Link href="/story/[id]" as={`/webcomics/${web.id}`}>
      <a className={storyStyles.card}>
        <h2>{web.title}</h2>
        <img src={web.image} />
        <strong>
          <p>Genres:{web.genres}</p>
        </strong>
        <p>{web.body}</p>
      </a>
    </Link>
  );
};
export default WebItem;
