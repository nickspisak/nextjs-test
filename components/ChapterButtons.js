import { Link } from "next";

const ChapterButtons = ({ story, page }) => {
  return (
    <div>
      <Link href={`story/${story.id}/chapter/${page.chapter}` + 1}>
        Next Chapter
      </Link>
      <Link href={`story/${story.id}/chapter/${page.chapter}` - 1}>
        Next Chapter
      </Link>
    </div>
  );
};
export default ChapterButtons;
