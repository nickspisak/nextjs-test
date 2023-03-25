import {prisma} from "../../config/db";
import Nav from "../../components/Nav";
import Link from "next/link";
import chapterStyles from "../../styles/Chapters.module.css";
import Image from "next/image"
const Story = ({pages, stories})=> {
    console.log(pages, stories)
    const prevButton = () => {
        if(pages.first == 1 || pages.first == null) {
            return null;
         } else {
            return (
                <div className={chapterStyles.col3}>
                <div className={chapterStyles.button}>
                <a href={`/chapter/${pages.chapter_id -1}`}>Previous Chapter</a>
                </div>
            </div>
            )
        }
    }
    const nextButton = () => {
        if(pages.last == 1 || pages.first == null) {
            return null;
        } else {
            return(
                <div className={chapterStyles.col3}>
                <div className={chapterStyles.button}>
                    <a href={`/chapter/${pages.chapter_id +1}`}>Next Chapter</a>
                </div>
            </div>
            )
        }
    }
    const backButton = () => {
        if(pages.id == 1) {
            return <Link href="/story/darkestsideofthemoon">Go Back</Link>
        } if (pages.id == 2) {
            return <Link href="/story/someboringmystery">Go Back</Link>
        } if (pages.id == null){
            return null
        }else {
            return <Link href="/">Go Back</Link>
        }
    }
    return (
        <>
        <Nav />
        <div>
            <div className={chapterStyles.button}>
            {backButton()}
            </div>
            <h1>{pages.title}</h1>
            <div className={chapterStyles.container}>
            {pages.pages.map((i) => {
                return (
                    <>
                    <div className={chapterStyles.row}>
                
                        
                        <img
                            key={i.page_id} 
                            src={i.page_url}
                            height="100%"
                            width="100%"
                            />
                        
                    
                    </div>
                    </>
                )
            })}
            </div>
          {}
          <div className={chapterStyles.row}>
            
                    {prevButton()}
             
            <div className={chapterStyles.col3}><div className={chapterStyles.spacer}></div></div>
            {nextButton()}
         </div>
        </div>
        </>
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

    return {
      props: {
        pages: pages,

      }
    }
  }