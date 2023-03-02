import Link from "next/link";

const chapterItem = ({ story }) => {
  return (
    <Link href={`/story/${story.chapter.slug}`}>
      <a>
        <h5>{story.chapter.title}</h5>
      </a>
    </Link>
  );
};
export default chapterItem;