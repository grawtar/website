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
        <h3 className="text-xl md:text-2xl text-center mt-0 mb-12 font-light">
          <span className="whitespace-nowrap">Full-Stack Developer</span> |{" "}
          <span className="whitespace-nowrap">SaaS</span> | <span className="whitespace-nowrap">NodeJS Developer</span>
        </h3>
        <p className="my-8">
          I'm Uroš. A full-stack NodeJS developer. I keep a{" "}
          <Link href="/posts">
            <a className="text-primary">blog</a>
          </Link>{" "}
          where I post NodeJS related content.
        </p>
        <p className="my-8">
          Most of my expertise lies in building full SaaS applications with payment processing and the like. The number
          one thing that contributed to this was definitely building my own SaaS from scratch (lots of lessons learned
          😀).
        </p>
        <p className="my-8">
          I'm also a Docker fan as I find it really easy to setup a lot of projects with it. This is actually hosted on
          Vercel, you can check out the{" "}
          <Link href="https://github.com/grawtar/website">
            <a className="text-primary">repo</a>
          </Link>
          .
        </p>
        <div className="py-8" id="projects"></div>
        <Title>Projects</Title>
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
