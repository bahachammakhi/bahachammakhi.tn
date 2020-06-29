import React, { useContext, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Redux } from "./_app";
import { NextSeo } from "next-seo";
import Preloader from "../components/ui/Preloader/Preloader";
const Layout = dynamic(
  () => import("../components/layout/PortfolioLayout/Layout"),
  {
    ssr: false,
    loading: () => <Preloader />,
  }
);
const HomeContainer = dynamic(
  () => import("../container/HomeContainer/HomeContainer"),
  { ssr: false, loading: () => <Preloader /> }
);

export default function Home() {
  const state = useContext(Redux);
  return (
    <>
      <NextSeo
        title="Baha chammakhi-Fullstack JS- Home"
        description="I am a motivated Fullstack js developer mainly working with the MERN stack always trying to ensurebest practices to keep my code clean. Dont hesitate to contact me to bring your project to live !"
      />

      <HomeContainer redux={state} />
    </>
  );
}
