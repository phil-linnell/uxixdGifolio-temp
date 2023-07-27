import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Meta from "../components/meta";
import gifs from "../../content/gifs.js";
import "../styles/base.css";
import * as styles from "./index.module.css";

const Home = ({ data }) => {
  const allGifs = data.allFile.edges.map(x => x.node);

  const renderAll = [];

  const renderGifs = gifs.map(gif => {
    return (
      <li key={`key${gif.day}`} className={`${styles.item} ${styles.itemGif}`}>
        <div className={styles.caption}>
          <div className={styles.day}><strong>Day </strong>{gif.day}</div>
          <p>{gif.content}</p>
          <p className={styles.client}><strong>Client: </strong>{gif.client}</p>
        </div>
        <div className={styles.gif}>
          {
            allGifs.map(item => item.relativePath === gif.gif 
              ? item.extension === "mp4" 
                ? <video key={item.relativePath} src={item.publicURL} autoPlay loop playsInline muted><track kind="captions" /></video>
                : <img key={item.publicURL} src={item.publicURL} alt="" />
              : "")
          }
          <div className={styles.itemNumber}>{gif.day}</div>
        </div>
      </li>
    );
  });
  
  const noOfBlanks = 100 - gifs.length;

  const renderBlanks = [...Array(noOfBlanks)].map((_, i) => (
    <li className={styles.item} key={`key${i}`}><div className={styles.content} /></li>
  ));
    
  renderAll.push(renderGifs);
  renderAll.push(renderBlanks);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><StaticImage src="../assets/uxixd-logo.png" alt="UXIXD Gifolio" /></h1>
        <div className={styles.strapline}>100 days of <strong>UX</strong> and <strong>IXD</strong> gifs<span className={styles.asterisk}>*</span></div>
      </header>
      <ul className={styles.list}>
        {renderAll}
      </ul>
    </div>
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