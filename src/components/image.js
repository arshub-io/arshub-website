import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-plugin-image";

export default function Image({ url, alt }) {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 300) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={
        allImageSharp.nodes.find((n) => n.fluid.originalName === url).fluid
      }
      alt={alt}
    />
  );
}
