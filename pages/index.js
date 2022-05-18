import StoryList from "../components/StoryList";
import styles from "../styles/Home.module.css";
import { server } from "../config";
export default function Home({ stories }) {
  return (
    <div className={styles.container}>
      <StoryList stories={stories} />
    </div>
  );
}
// export const getStaticProps = async () => {
//   const req = await fetch(`${server}/api/stories.json`);
//   const data = await req.json();

//   return {
//     props: {
//       stories: data,
//     },
//   };
// };
export async function getServerSideProps({ params }) {
  const req = await fetch(`${server}/api/${params.id}.json`);
  const data = await req.json();
  return {
    props: { stories: data },
  };
}
