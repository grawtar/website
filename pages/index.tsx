import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import GhostButton from "../src/components/GhostButton";
import Header from "../src/components/Header";
import PageContent from "../src/components/PageContent";
import PillButton from "../src/components/PillButton";
import ProjectContent from "../src/components/Project/ProjectContent";
import ProjectContentDescription from "../src/components/Project/ProjectContentDescription";
import ProjectContentRole from "../src/components/Project/ProjectContentRole";
import ProjectContentTech from "../src/components/Project/ProjectContentTech";
import ProjectFrame from "../src/components/Project/ProjectFrame";
import ProjectImage from "../src/components/Project/ProjectImage";
import ProjectTitle from "../src/components/Project/ProjectTitle";
import ProjectWrapper from "../src/components/Project/ProjectWrapper";
import SubTitle from "../src/components/SubTitle";
import Title from "../src/components/Title";

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
          As I like all things tech, I often dabble in all the new frameworks and post the discoveries on my{" "}
          <Link href="/posts">
            <a className="text-primary">blog</a>
          </Link>
          .
        </p>
        {/* <div className="flex flex-col space-y-3 mt-12">
          <PillButton href="/posts">Blog</PillButton>
        </div> */}
        {/* <div className="flex flex-col space-y-3 mt-20">
          <PillButton href="/projects">Projects</PillButton>
          <GhostButton href="/posts">Blog</GhostButton>
        </div> */}
        <div className="py-8" id="projects"></div>
        <Title>Projects</Title>
        <SubTitle>Building Apps since 2016</SubTitle>
        <div className="divide-y">
          <ProjectFrame>
            <ProjectTitle href="https://pakkly.com">Pakkly</ProjectTitle>
            <ProjectWrapper>
              <ProjectContent>
                <ProjectContentDescription>
                  Complete solution for deploying and updating desktop apps. Ensures your clients are on the latest
                  version, cross-platform support included.
                </ProjectContentDescription>
                <ProjectContentRole>Founder</ProjectContentRole>
                <ProjectContentTech>React, NextJS, Express, Rust</ProjectContentTech>
              </ProjectContent>
              <ProjectImage href="https://pakkly.com" color="brand-pakkly">
                <img src="/pakkly-image.png" width="80%" />
              </ProjectImage>
            </ProjectWrapper>
          </ProjectFrame>
          <ProjectFrame>
            <ProjectTitle href="https://github.com/grawtar/website">Personal site</ProjectTitle>
            <ProjectWrapper>
              <ProjectContent>
                <ProjectContentDescription>
                  You're on it right now! It's an open source repo over on Github that uses Vercel for hosting. It also
                  includes a static blog built from markdown files.
                </ProjectContentDescription>
                <ProjectContentRole></ProjectContentRole>
                <ProjectContentTech>React, NextJS</ProjectContentTech>
              </ProjectContent>
              {/* <ProjectImage href="https://github.com/grawtar/website" color="brand-pakkly">
                <img src="/pakkly-image.png" width="80%" />
              </ProjectImage> */}
            </ProjectWrapper>
          </ProjectFrame>
        </div>
      </PageContent>
    </div>
  );
};

export default Index;
