import React from "react";
import { graphql } from "gatsby";
import Meta from "../components/meta";
import Template from "../components/template";
import gifs from "../../content/gifs.js";
import "../styles/base.css";

const Home = ({ data }) => {
  const allFiles = data.allFile.edges.map(x => x.node);

  return (
    <Template gifs={gifs} allFiles={allFiles} title={<>100 days of <strong>UX</strong> &amp; <strong>IXD</strong> gifs</>} />
  );
}

export default Home;

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