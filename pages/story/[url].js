import {prisma} from "../../config/db";
import {Link} from "next/link";
import chapterStyles from "../../styles/Chapters.module.css";
const Story = (props)=> {
    console.log(props)
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className={chapterStyles.card}>
            {props.chapters.map((i) => {
                return (
                        <ul key={i.chapter_id} className={chapterStyles.ul}>{i.title}</ul>
                )
            })}
            </div>
        </div>
    )
} 

export default Story;
export async function getServerSideProps({params}) {
    const chapters = await prisma.stories.findFirst({
        include: {
            chapters: true
        }
    });
    return {
      props: chapters
    }
  }