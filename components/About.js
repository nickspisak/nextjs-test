import styles from "../styles/Header.module.css";
const About = () => {

    return (
        <>
        <p>
        A large portion of the population suffers with ADHD, ADD, or general attension disorders. These stories have this focus in mind.
        </p>
            <ul>
                <li>Short Chapters</li>
                <li>No fluff or filler</li>
                <li><div className={styles.summaryButton}>Summary Buttton</div>can be clicked at anytime if you need it!</li>
                <li><h2 className={styles.mature}>M</h2>Symbolizes the story is meant for Mature audiences only! These stories may contain drugs, sexual content, swearing, or other explicit content. Any story with this mark is recommended for viewers 18 years or older</li>
            </ul>
        <p>
            Please Enjoy!
        </p>
        </>
    )
}

export default About;