import { request, gql } from "graphql-request";
import { SERVER } from "./db";

const graphqlAPI = SERVER;

export const getStories = async () => {
  const query = gql`
    query MyQuery {
      storiesConnection {
        edges {
          node {
            cover {
              url
            }
            genres
            id
            title
            slug
            description
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.storiesConnection.edges;
};

export const getStoryDetails = async (slug) => {
  const query = gql`
    query GetStoryDetails($slug: String!) {
      story(where: { slug: $slug }) {
        pages {
          url
        }
        title
        genres
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.story;
};
