import {prisma} from "../../config/db";
import Nav from "../../components/Nav";
import {Link} from "next/link";
import chapterStyles from "../../styles/Chapters.module.css";
import Header from "../../components/Header";
import { useRouter } from 'next/router';
const Story = (props)=> {
    console.log(props.chapters);
    const router = useRouter();
    const { url } = router.query;
    const chapterCount = () => {
        if(props.chapters.length === 1) {
            return <p>A sneak preview of the first chapter is available to read for free!</p>
        } if(props.chapters.length === 0) {
            document.getElementById("chapterList").style.display = "none" 
            return <p>Coming Soon! No chapters available yet!</p>; 
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
            <table id="chapterList" className={chapterStyles.card}>
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
                            <a href={`/chapter/${i.chapter_id}?storyUrl=${url}`}>{i.title}</a>
                        </td>
                       
                        <td className={chapterStyles.ul}>{i.pages.length}</td>
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
            chapters: {
                include: {
                    pages: true,
                }
            }
        }
    });
    
    return {
      props: chapters
    }
  }