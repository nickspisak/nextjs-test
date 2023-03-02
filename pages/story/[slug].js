import { gql } from "graphql-request";
import { getStories, getStoryDetails } from "../../services";

function storyPage({stories}) {
    return(
        <div>
            <div>
                <h1>{stories.title}</h1>
                <p>List of chapters</p>
            </div>
            {stories.map((story, index) => (
        <chapterItem story={story.node} key={index} />
      ))}
        </div>
    )
}
export async function getStaticPaths() {
    const res = await fetch(getStoryDetails())
    const stories = await res.json()
    const paths = stories.map((story) => ({
        params: {slug: story.chapter.slug}
    }))
    return {
        paths,
        fallback:false
    }
}
export const getStaticProps = async () => {
    const stories = (await getStoryDetails()) || [];
  
    return {
      props: {
        stories,
      },
    };
  };
  
export default storyPage;