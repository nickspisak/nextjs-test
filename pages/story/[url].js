import {prisma} from "../../config/db";
import {Link} from "next/link";
import chapterStyles from "../../styles/Chapters.module.css";
const Story = (props)=> {
    
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <table className={chapterStyles.card}>
                <thead>
                    <tr>
                    <th>Chapter Title</th>
                <th>Number</th>
                    </tr>
                </thead>
            <tbody>
            {props.chapters.map((i) => {
                return (
                    <>
                    <tr key={i.chapter_id}>
                        <td className={chapterStyles.ul}> 
                            <a href={`/chapter/${i.chapter_id}`}>{i.title}</a>
                        </td>
                        <td className={chapterStyles.ul}>{i.chapter_number}</td>
                    </tr>
                    </>
                )
            })}
            </tbody>
            </table>
        </div>
    )
} 

export default Story;
export async function getServerSideProps({params}) {
    const url = params?.url;
    const chapters = await prisma.stories.findFirst({
        where: {
            url: url, 
        },
        include: {
            chapters: true,
        }
    });
    return {
      props: chapters
    }
  }