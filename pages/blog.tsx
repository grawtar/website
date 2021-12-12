import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../src/components/Header";
import PageContent from "../src/components/PageContent";
import Title from "../src/components/Title";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog - Uroš Štok</title>
        <meta name="description" content="Uros Stok's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title>Blog</Title>
      <PageContent></PageContent>
    </div>
  );
};

export default Blog;
