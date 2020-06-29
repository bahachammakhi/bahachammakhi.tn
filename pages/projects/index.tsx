import React from "react";
import Layout from "../../components/layout/PortfolioLayout/Layout";
import { getProjects } from "../../requests/requests";
import CardProject from "../../components/ui/CardProject/CardProject";
import Head from "next/head";

const Projects = ({ projects }) => {
  return (
    <>
      <div style={{ marginTop: "3%" }}>
        <Head>
          <title>Baha chammakhi-Projects</title>
          <meta
            name="description"
            content="List of Projects Baha chammakhi Contributed on"
          ></meta>
          <meta
            name="keywords"
            content={`blogs, articles,Javascript,Code,Programming,Baha ,chammakhi, Portfolio, bahachammakhi, devops,arcitecture,tunisia,developer,nodejs,typescript`}
          ></meta>
        </Head>
        <span className="title">Services:</span>
        <div
          id="projects"
          style={{ display: "flex", flexWrap: "wrap", marginTop: "5%" }}
        >
          {projects?.length > 0 ? (
            projects?.map((el: any, index: any) => (
              <div
                id="projects"
                style={{ display: "flex", flexWrap: "wrap", marginTop: "5%" }}
              >
                <CardProject data={el} />
              </div>
            ))
          ) : (
            <>Loading</>
          )}
        </div>
      </div>

      <style jsx>
        {`
          .title {
            border-bottom: 4px solid #2a878f;
            padding-bottom: 5px;
            font-size: 2em;
            font-weight: bolder;
            color: black;
            border-radius: 5px;
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps({ params }) {
  const projects = await getProjects();
  return {
    props: {
      projects: projects.data,
    },
  };
}

export default Projects;
