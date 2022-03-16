import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/Header";
import PageContent from "../src/components/PageContent";
import Title from "../src/components/Title";
import { getAllPosts, Post } from "../src/lib/postApi";

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
  posts: Post[];
};

const Posts: NextPage<PageStaticProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog - Uroš Štok</title>
        <meta name="description" content="Uros Stok's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title>Blog</Title>
      <PageContent>
        <div className="flex flex-col">
          {posts.map((post) => (
            <a href={`/blog/${post.slug}`} key={post.slug}>
              <div className="py-4  hover:bg-gray-100 pl-4 gap-y-2 flex flex-col hover:border-l-4 transition-all">
                <h2 className="text-xl sm:text-2xl text-gray-700">
                  {post.title}
                </h2>
                <h3 className="text-md sm:text-lg text-gray-600">
                  {post.subTitle}
                </h3>
                {/* <h5 className="text-sm">
                  by{" "}
                  <a href="/" className="text-primary">
                    {post.author}
                  </a>{" "}
                  {months[new Date(post.date).getMonth()]} {new Date(post.date).getDate()},{" "}
                  {new Date(post.date).getFullYear()}
                </h5> */}
              </div>
            </a>
          ))}
        </div>
      </PageContent>
    </div>
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
