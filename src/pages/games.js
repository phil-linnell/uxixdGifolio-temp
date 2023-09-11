import React from "react";
import { graphql } from "gatsby";
import Meta from "../components/meta";
import Template from "../components/template";
import gifsGames from "../../content/gifs-games.js";
import "../styles/base.css";

const Games = ({ data }) => {
  const allFiles = data.allFile.edges.map(x => x.node);

  return (
    <Template gifs={gifsGames} allFiles={allFiles} />
  );
}

export default Games;

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