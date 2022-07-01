import { NextPage } from "next";
import Head from "next/head";
import Container from "../src/components/Container";
import ProjectList from "../src/components/ProjectList";
import Title from "../src/components/Title";

const Projects: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Projects | Uroš Štok</title>
        <meta name="description" content="Uroš štok's Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Projects</Title>
      <ProjectList />
    </Container>
  );
};

export default Projects;
