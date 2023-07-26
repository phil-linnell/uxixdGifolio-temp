import * as React from "react";
import { graphql } from "gatsby";
import gifs from "../../content/gifs.js";
import "../styles/base.css";
import * as styles from "./index.module.css";

const Home = ({ data }) => {
  const allGifs = data.allFile.edges.map(x => x.node);

  const renderAll = [];

  const renderGifs = gifs.map(gif => {
    return (
      <li key={`key${gif.day}`} className={styles.item}>
        <div className={styles.content}>
          <div className={styles.caption}>
            <div>Day: {gif.day}</div>
            <h2>{gif.title}</h2>
            <p>{gif.content}</p>
            <p>Client: {gif.client}</p>
          </div>
          <div className={styles.gif}>
            {
              allGifs.map(item => item.relativePath === gif.gif 
                ? item.extension === "mp4" 
                  ? <video key={item.relativePath} src={item.publicURL} autoPlay loop playsInline muted><track kind="captions" /></video>
                  : <img src={item.publicURL} alt="" />
                : "")
            }
          </div>
        </div>
      </li>
    );
  });
  
  const noOfBlanks = 100 - gifs.length;

  
  const renderBlanks = [...Array(noOfBlanks)].map((_, i) => (
    <li className={styles.item}><div className={styles.content} /></li>
  ));
    
  renderAll.push(renderGifs);
  renderAll.push(renderBlanks);

  return (
    <div className={styles.container}>
      <h1>UXIXD</h1>
      <ul className={styles.list}>
        {renderAll}
      </ul>
    </div>
  );
}


export default Home;

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