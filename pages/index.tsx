import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Container from "../src/components/Container";
import Hero from "../src/components/Hero";
import PostList from "../src/components/PostList";
import Title from "../src/components/Title";
import { getAllPosts, IPost } from "../src/lib/postApi";

type PageStaticProps = {
  posts: IPost[];
};

const Index: NextPage<PageStaticProps> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Uroš Štok - Full stack developer</title>
        <meta name="description" content="Uroš štok's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <Title>Latest posts</Title>
        <PostList posts={posts} />
      </div>
    </Container>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<PageStaticProps> = async (
  context
) => {
  const posts = getAllPosts().slice(0, 5);
  return {
    props: { posts },
  };
};
