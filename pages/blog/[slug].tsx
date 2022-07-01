import { GetStaticProps, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../../src/components/Container";
import { markdownReadTime, markdownToHtml } from "../../src/lib/markdownToHtml";
import { getAllPosts, getPostBySlug, IPost } from "../../src/lib/postApi";

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

type PageStaticProps = { post: IPost };
const Post: NextPage<PageStaticProps> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      <Head>
        <title>{`${post.title} - Uroš Štok`}</title>
        <meta
          name="description"
          content={`${post.content.substring(0, 100)}...`}
        />
        <meta name="keywords" content={post.keywords} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.subTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="prose lg:prose-lg mx-auto px-3 sm:px-0 pb-4 max-w-4xl">
        <span className="not-prose">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {post.title}
          </h1>
          <h3 className="my-4 text-sm">
            by{" "}
            <Link passHref href="/">
              <span className="text-primary cursor-pointer">{post.author}</span>
            </Link>{" "}
            {months[new Date(post.date).getMonth()]}{" "}
            {new Date(post.date).getDate()}, {new Date(post.date).getFullYear()}
            , {Math.floor(post.readTimeMinutes)} min read
          </h3>
        </span>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
    </Container>
  );
};
export default Post;

export const getStaticProps: GetStaticProps<PageStaticProps> = async ({
  params,
}) => {
  if (!params || !params.slug) return { notFound: true };

  let post = getPostBySlug(params.slug as string);
  post.content = await markdownToHtml(post.content ?? "");
  post.readTimeMinutes = await markdownReadTime(post.content ?? "");

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
