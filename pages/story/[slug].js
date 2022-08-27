import { getStories, getStoryDetails } from "../../services/index";

import { StoryDetail } from "../../components/StoryDetail";
const Reader = ({ story }) => {
  return (
    <>
      <StoryDetail story={story} />
    </>
  );
};
export default Reader;
export async function getStaticProps({ params }) {
  const story = await getStoryDetails(params.slug);

  return {
    props: { story },
  };
}

export async function getStaticPaths() {
  const stories = await getStories();
  return {
    paths: stories.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
