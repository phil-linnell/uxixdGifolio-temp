import * as React from "react";
import { graphql } from "gatsby";
import classnames from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import Meta from "../components/meta";
import { useScrollPosition } from "../utils/hooks";
import gifs from "../../content/gifs.js";
import "../styles/base.css";
import * as styles from "./index.module.css";
import logoFooter from "../assets/uxixd-logo-alt.png";

const Home = ({ data }) => {
  const scrollY = useScrollPosition();
  const classes = classnames(styles.container, {
    [styles.scrolled]: scrollY > 0
  });
  const allGifs = data.allFile.edges.map(x => x.node);


  const renderAll = [];

  const renderGifs = gifs.map(gif => {
    return (
      <li key={`key${gif.day}`} className={`${styles.item} ${styles.itemGif}`}>
        <div className={styles.caption}>
          <div className={styles.captionInner}>
            <div className={styles.day}><strong>Day </strong>{gif.day}</div>
            <p>{gif.content}</p>
            <p className={styles.client}><strong>Client: </strong>{gif.client}</p>
          </div>
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
    <li className={`${styles.item} ${styles.itemBlank}`} key={`key${i}`}><div className={styles.content} /></li>
  ));
    
  renderAll.push(renderGifs);
  renderAll.push(renderBlanks);

  return (
    <div className={classes}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={`${styles.headerButton} ${styles.buttonXX}`}><a href="https://uxixd.com" aria-label="XX" /></div>
          <div className={`${styles.headerButton} ${styles.buttonLinktree}`}><a href="https://linktr.ee/uxixd" aria-label="Linktree" /></div>
          <div className={styles.headerContent}>
            <h1><StaticImage src="../assets/uxixd-logo.png" alt="UXIXD Gifolio" placeholder="none" /></h1>
            <div className={styles.strapline}>100 days of <strong>UX</strong> &amp; <strong>IXD</strong> gifs</div>
          </div>
          <div className={`${styles.headerButton} ${styles.buttonEmail}`}><a href="mailto:gifolio@uxixd.com" aria-label="Email" /></div>
        </div>
      </header>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {renderAll}
        </ul>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <img src={logoFooter} alt="UXIXD" />
          </div>
          <div className={styles.footerSmallPrint}>
            <p>UX, IXD and IP invention with over 20 years experience leading in design with auto and tech brands. UXIXD provides consultancy, research, content creation, conception, direction and expert profile. Founded by <a href="https://www.linkedin.com/in/t-i-m-s-m-i-t-h/" target="_blank" rel="noreferrer">Tim Smith</a>.</p>
          </div>
          <div className={styles.copyright}>
            <div>&copy; Tim Smith 2023</div>
            <a href="https://uxixd.com/#privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
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