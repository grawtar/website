import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts, Post } from "../../src/lib/postApi";
import Head from "next/head";
import markdownToHtml from "../../src/lib/markdownToHtml";
import Header from "../../src/components/Header";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

type PageStaticProps = { post: Post };
const Post: NextPage<PageStaticProps> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <Head>
        <title>Home - Uroš Štok</title>
        <meta name="description" content="Uros Stok's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header overrideTitle="Blog" overrideTitleHref="/posts" />
      <article className="prose lg:prose-lg mx-auto">
        <span className="not-prose">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{post.title}</h1>
          <h5 className="my-4 text-sm">
            by{" "}
            <Link href="/">
              <span className="text-primary">{post.author}</span>
            </Link>{" "}
            {months[new Date(post.date).getMonth()]} {new Date(post.date).getDate()},{" "}
            {new Date(post.date).getFullYear()}
          </h5>
        </span>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
    </div>
  );
};
export default Post;

export const getStaticProps: GetStaticProps<PageStaticProps> = async ({ params }) => {
  if (!params || !params.slug) return { notFound: true };

  let post = getPostBySlug(params.slug as string);
  post.content = await markdownToHtml(post.content ?? "");

  return {
    props: {
      post,
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
