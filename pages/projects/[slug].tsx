import React, { useContext, useState } from "react";
import { getProjects, getProject } from "../../requests/requests";
import dynamic from "next/dynamic";
import Layout from "../../components/layout/PortfolioLayout/Layout";
// import { Redux } from "../_app";
import { NextSeo } from "next-seo";
const ProjectContainer = dynamic(
  () => import("../../container/ProjectContainer/ProjectContainer"),
  { ssr: false }
);
const Project = ({ data, context, projects }) => {
  return (
    <Layout>
      <NextSeo
        title={`Baha chammakhi-${data?.name}`}
        description={data?.description}
      />
      <ProjectContainer projects={projects} data={data} />
    </Layout>
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
