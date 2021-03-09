import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

import Services from "../components/services";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>ArsHub - Services</title>
        <meta name="description" content="ArsHub" />
      </Helmet>
      <Services />
    </Layout>
  );
}
