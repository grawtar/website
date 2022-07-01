import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Container from "../src/components/Container";
import PostList from "../src/components/PostList";
import Title from "../src/components/Title";
import { getAllPosts, IPost } from "../src/lib/postApi";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

type PageStaticProps = {
  posts: IPost[];
};

const Posts: NextPage<PageStaticProps> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Blog - Uroš Štok</title>
        <meta name="description" content="Uroš štok's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>All posts</Title>
      <PostList posts={posts} />
    </Container>
  );
};
export default Posts;

export const getStaticProps: GetStaticProps<PageStaticProps> = async (
  context
) => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};
