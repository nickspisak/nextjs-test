import {prisma} from "../../config/db";
import {Image} from "next/image";
import {Link} from "next/link";
import chapterStyles from "../../styles/Chapters.module.css";
const Story = ({pages, stories})=> {
    const prevButton = () => {
        if(pages.chapter_id != 100 && 200) {
            return <a href={`/chapter/${pages.chapter_id -1}`}>Previous Chapter</a>
        } else {
            return null
        }
    }
    return (
        <div>
            <a href={`/story/${stories.url}`}>Go Back</a>
            <h1>{pages.title}</h1>
            
            {pages.pages.map((i) => {
                return (
                    <>
                        <img 
                            key={i.page_id} 
                            src={i.page_url}
                            />
                            
                    </>
                )
            })}
          {}
          {prevButton()}
          <a href={`/chapter/${pages.chapter_id +1}`}>Next Chapter</a>
        
        </div>
    )
} 

export default Story;
export async function getServerSideProps({params}) {
    const chapter_id = params?.chapter_id;
    const number = Number(chapter_id);
    const pages = await prisma.chapters.findFirst({
        where: {
            chapter_id: number, 
        },
        include: {
            pages: true,
        }
    });
   const newNumber = String(number).charAt(0);
   const id = Number(newNumber);
    const stories = await prisma.stories.findFirst({
        where: {
            id: id
        },
    })
    return {
      props: {
        pages: pages,
        stories: stories
      }
    }
  }