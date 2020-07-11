import React, { useContext, useState } from "react";
import { getProjects, getProject } from "../../requests/requests";
import dynamic from "next/dynamic";
import SEO from "../../utils/SeoUtils";
const ProjectContainer = dynamic(
  () => import("../../container/ProjectContainer/ProjectContainer"),
  { ssr: false }
);
import Head from "next/head";

const Project = ({ data, context, projects, slug }) => {
  return (
    <>
      {/* <Head>
        <title>Baha chammakhi-{data?.slug}</title>
        <meta name="description" content={data?.description}></meta>
        <meta
          name="keywords"
          content={`blogs, articles,Javascript,Code,Programming,Baha ,chammakhi, Portfolio, Projects, bahachammakhi, devops,arcitecture,tunisia,developer,nodejs,typescript,${data?.name},${data?.slug},${data?.description}`}
        ></meta>
      </Head> */}
      <SEO
        title={`Bahachammakhi- ${data?.slug}`}
        description={data?.description}
        language="en-us"
        image={data?.cover.url}
        pageUrl={`https://www.bahachammakhi.com/projects/${slug}`}
        keywords={data?.keywords}
      />
      <ProjectContainer projects={projects} data={data} />
    </>
  );
};

export default Project;

export async function getStaticProps({ params }) {
  const { data } = await getProject(params.slug);
  const projects = await getProjects();
  return {
    props: {
      data: data,
      projects: projects.data,
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();
  return {
    paths:
      projects?.data?.map((project: any) => `/projects/${project?._id}`) || [],
    fallback: false,
  };
}
