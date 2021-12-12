import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../src/components/Header";
import PageContent from "../src/components/PageContent";
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

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Projects - Uroš Štok</title>
        <meta name="description" content="Uros Stok's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title>Projects</Title>
      <SubTitle>Building Apps since 2017</SubTitle>
      <PageContent>
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
              <ProjectImage color="brand-pakkly">
                <img src="/pakkly-image.png" width="80%" />
              </ProjectImage>
            </ProjectWrapper>
          </ProjectFrame>
          {/* <ProjectFrame>
            <ProjectTitle>Hamster Beasts</ProjectTitle>
            <ProjectWrapper mirror>
              <ProjectContent>
                <ProjectContentDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ac sociis eget habitasse vulputate quam
                  pretium egestas. Augue mi volutpat enim vel in.
                </ProjectContentDescription>
                <ProjectContentRole>Co-Founder – Full stack + Smart contract integration</ProjectContentRole>
                <ProjectContentTech>React, React, React, React, React, React</ProjectContentTech>
              </ProjectContent>
              <ProjectImage color="brand-hamsterbeasts">
                <img src="/hamsterbeasts-image.png" width="80%" />
              </ProjectImage>
            </ProjectWrapper>
          </ProjectFrame> */}
        </div>
      </PageContent>
    </div>
  );
};

export default Projects;
