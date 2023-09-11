import styles from "../styles/Header.module.css";
import React, { useState } from "react";

const About = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
        <p>
        A large portion of the population suffers with ADHD, ADD, or general attension disorders. These stories have this focus in mind.
        </p>
            <ul>
                <li>Short Chapters</li>
                <li>No fluff or filler</li>
                <li><div className={styles.summaryButton} onClick={() => setModalOpen(true)}>Summary Buttton</div>
                {modalOpen ? (
                <>
                <div className={styles.summaryModal}>
                <div className={styles.summaryClose} onClick={() => setModalOpen(false)}>X</div>
                <p>Click this whenever you need it! It provides a quick summary incase you forgot, or missed anything!</p>
                </div>
                </>
            ) : null}
                </li>
                <li><h2 className={styles.mature}>M</h2>Symbolizes the story is meant for Mature audiences only! These stories may contain drugs, sexual content, intense swearing, or other explicit content. Any story with this mark is recommended for viewers 18 years or older</li>
            </ul>
        <p>
            Please Enjoy!
        </p>
        </>
    )
}

export default About;