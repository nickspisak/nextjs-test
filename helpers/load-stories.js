import { server } from "../config/index";
export async function loadStories() {
  let stories = [];
  try {
    const res = await fetch(`${server}/api/stories`, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    stories = await res.json();
  } catch (error) {
    console.log(error);
  }

  return stories;
}
export async function loadStory(context) {
  let story = [];
  try {
    const res = await fetch(`${server}/api/stories/${context.params.id}`, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    story = await res.json();
  } catch (error) {
    console.log(error);
  }
  return story;
}
export async function loadStoryPaths(context) {
  let stories = [];
  try {
    const res = await fetch(`${server}/api/stories/${context.params.id}`, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    stories = await res.json();
    const ids = stories.map((story) => story.id);
    paths = ids.map((id) => ({ params: { id: id.toString() } }));
  } catch (error) {
    console.log(error);
  }

  return {
    paths,
    fallback: false,
  };
}
