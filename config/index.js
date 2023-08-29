const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://readspishstories.com";
//https://spishstories.netlify.app
