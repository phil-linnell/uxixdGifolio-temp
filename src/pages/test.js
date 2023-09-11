import React from "react";
import { graphql } from "gatsby";
import Meta from "../components/meta";
import Template from "../components/template";
import gifsTest from "../../content/gifs-test.js";
import "../styles/base.css";

const Test = ({ data }) => {
  const allFiles = data.allFile.edges.map(x => x.node);

  return (
    <Template gifs={gifsTest} allFiles={allFiles} />
  );
}

export default Test;

export const Head = () => {
  return <Meta />
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          publicURL
          extension
        }
      }
    }
  }
`;