import Link from "next/link";
import Meta from "../../../components/Meta";
import { server } from "../../../config";
const story = ({ story }) => {
  return (
    <>
      <Meta title={story.title} description={story.excerpt} />
      <h1>{story.title}</h1>
      <p>{story.genres}</p>

      <img src={story.src[0]} />
      <img src={story.src[1]} />
      <img src={story.src[2]} />
      <img src={story.src[3]} />
      <img src={story.src[4]} />
      <img src={story.src[5]} />
      <img src={story.src[6]} />
      <img src={story.src[7]} />
      <img src={story.src[8]} />
      <img src={story.src[9]} />
      <img src={story.src[10]} />
      <img src={story.src[11]} />
      <img src={story.src[12]} />
      <img src={story.src[13]} />
      <img src={story.src[14]} />
      <img src={story.src[15]} />
      <img src={story.src[16]} />
      <img src={story.src[17]} />

      {console.log(story.src)}
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// export const getStaticProps = async ({ params }) => {
//   const req = await fetch(`${server}/${params.id}.json`);
//   const data = await req.json();
//   return {
//     props: {
//       story: data,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const req = await fetch(`${server}/stories.json`);
//   const data = await req.json();
//   const paths = data.map((story) => {
//     return { params: { id: story } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export async function getServerSideProps({ params }) {
  const req = await fetch(`${server}/api/${params.id}.json`);
  const data = await req.json();
  return {
    props: { story: data },
  };
}
export default story;
