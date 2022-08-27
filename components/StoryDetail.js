import React from "react";
import Meta from "./Meta";
import Link from "next/link";
export const StoryDetail = ({ story }) => {
  return (
    <>
      <Meta title={story.title} description={story.genres} />
      <h1>{story.title}</h1>
      {story.pages.map((page) => (
        <img src={page.url} />
      ))}
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};
