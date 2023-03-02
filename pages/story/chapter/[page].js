import Link from "next/link";
import { gql } from "graphql-request";
const limit = 1;

function ChapterPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  story,
}) {
  return (
    <>
      {hasPreviousPage ? (
        <Link href={`/story/${story.slug}/chapter/${currentPageNumber - 1}`}>
          <a>Previous Page</a>
        </Link>
      ) : null}
      {hasNextPage ? (
        <Link href={`/story/${story.slug}/chapter/${currentPageNumber + 1}`}>
          <a>Next Page</a>
        </Link>
      ) : null}
    </>
  );
}
export async function getStaticPaths() {
  const query = gql`
    {
      chaptersConnection {
        aggregate {
          count
        }
      }
    }
  `;
  const { chaptersConnection } = await hygraph.request(query);
  function* numberOfPages({total, limit}) {
    let page = 1;
    let offset = 0;
    while (offset < total) {
      yield page;
      page++;
      offset += limit;
    }
  }
  const paths = [
    ...numberOfPages({
      total: chaptersConnection.aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: {page: String(page)}
  }));
  return {
    paths, 
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const query = gql`
  
  `
}
