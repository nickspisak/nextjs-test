import {prisma} from "../../config/db";
import Nav from "../../components/Nav";
import Link from "next/link";
import chapterStyles from "../../styles/Chapters.module.css";
import Image from "next/image"
import { useRouter } from 'next/router';
import { Modal, ModalHeader, ModalFooter } from "reactstrap";
import React, { useEffect, useState } from "react";

const Story = ({pages, stories})=> {
    const [modalOpen, setModalOpen] = useState(false)
    console.log(pages, stories)
    const router = useRouter();
    const { url } = router.query;
    const {storyUrl} = router.query;
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
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const backButton = () => {
                router.push(`/story/${storyUrl}`);
            }
            document.getElementById('backButton').addEventListener('click', backButton);
        }
    }, [storyUrl, router])
    return (
        <>
        <Nav />
        <div>
            <div id="backButton" className={chapterStyles.button}>Go Back
            </div>
            <h1>{pages.title}</h1>
            <div className={chapterStyles.summaryButton}
                onClick={() => setModalOpen(true)}>Summary Button
            </div>
            {modalOpen ? (
                <>
                <div className={chapterStyles.summaryModal}>
                <div className={chapterStyles.summaryClose} onClick={() => setModalOpen(false)}>X</div>
                <p>{pages.summary}</p>
                </div>
                </>
            ) : null}
            
            <div className={chapterStyles.container}>
            {pages.pages.map((i) => {
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