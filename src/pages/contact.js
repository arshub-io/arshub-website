import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

import Contact from "../components/contact";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <html lang="ja" />
        <title>ArsHub - Contact</title>
        <meta name="description" content="ArsHub" />
      </Helmet>
      <Contact />
    </Layout>
  );
}
