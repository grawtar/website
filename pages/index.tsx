import type { NextPage } from "next";
import Head from "next/head";
import GhostButton from "../src/components/GhostButton";
import Header from "../src/components/Header";
import PageContent from "../src/components/PageContent";
import PillButton from "../src/components/PillButton";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home - Uroš Štok</title>
        <meta name="description" content="Uros Stok's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContent>
        <h2 className="text-7xl md:text-8xl text-center mb-24 mt-12 font-bold">Hey!</h2>
        <p className="my-8">
          I'm a software developer with 4+ years of experience in the software world. The bulk of my projects consist of
          web and desktop apps (as well as the occasional mobile app).
        </p>
        <p className="my-8">
          As I like all things tech, I often dabble in all the new frameworks and post the discoveries on my blog.
        </p>
        <div className="flex flex-col space-y-3 mt-20">
          <PillButton href="/projects">Projects</PillButton>
          {/* <GhostButton href="/story">My story</GhostButton> */}
          {/* <GhostButton href="/blog">Blog</GhostButton> */}
        </div>
      </PageContent>
    </div>
  );
};

export default Index;
