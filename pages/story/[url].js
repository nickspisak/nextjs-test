import {prisma} from "../../config/db";
import Nav from "../../components/Nav";
import {Link} from "next/link";
import chapterStyles from "../../styles/Chapters.module.css";
import Header from "../../components/Header";
const Story = (props)=> {
    console.log(props.chapters)
    const chapterCount = () => {
        if(props.chapters.length === 1) {
            return <p>A sneak preview of the first chapter is available to read for free!</p>
        } else {
            return <p>Currently {props.chapters.length} chapters available to read for free!</p>
        }
    }
    return (
        <>
        <Nav />
        <div>
           
            <h1>{props.title}</h1>
            <p>{props.description}</p>
           {chapterCount()}
            <table className={chapterStyles.card}>
                <thead>
                    <tr>
                    <th>Chapter Number</th>
                    <th>Chapter Title</th>
                <th>Page Count</th>
                    </tr>
                </thead>
            <tbody>
            {props.chapters.map((i) => {
                return (
                    <>
                    <tr key={i.chapter_id}>
                    <td className={chapterStyles.ul}>{i.chapter_number}</td>
                        <td className={chapterStyles.ul}> 
                            <a href={`/chapter/${i.chapter_id}`}>{i.title}</a>
                        </td>
                       
                        <td className={chapterStyles.ul}>{}</td>
                    </tr>
                    </>
                )
            })}
            </tbody>
            </table>
        </div>
        </>
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
            chapters: true
        }
    });
    
    return {
      props: chapters
    }
  }