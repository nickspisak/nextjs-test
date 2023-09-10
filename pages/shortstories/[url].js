import {prisma} from "../../config/db";
import Nav from "../../components/Nav";
import {Link} from "next/link";
import chapterStyles from "../../styles/Chapters.module.css";
import Header from "../../components/Header";
const ShortStory = ({short_stories})=> {
    console.log(short_stories)
  
   
    return (
        <>
        <Nav />
        <div>
         
            <div className={chapterStyles.container}>
            {short_stories.map((i) => {
                return (
                    <>
                    <div className={chapterStyles.row}>
                
                        
                        <img
                            key={i.page_id} 
                            src={i.page_url}
                            alt={i.page_id}
                            height="100%"
                            width="100%"
                            />
                        
                    
                    </div>
                    </>
                )
            })}
            </div>
        </div>
        </>
    )
} 

export default ShortStory;
export async function getServerSideProps({params}) {
    const url = params?.url;
    const short_stories = await prisma.shorts.findFirst({
        where: {
            url: url, 
        },
        include: {
            short_stories: true,
        }
    });
    
    return {
      props: short_stories
    }
  }
