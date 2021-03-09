import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

import Hero from "../components/hero";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>ArsHub</title>
        <meta name="description" content="ArsHub" />
      </Helmet>
      <Hero />
    </Layout>
  );
}
