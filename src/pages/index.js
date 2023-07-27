import * as React from "react";
import { graphql, Link } from "gatsby";
import classnames from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import Meta from "../components/meta";
import { useScrollPosition } from "../utils/hooks";
import gifs from "../../content/gifs.js";
import "../styles/base.css";
import * as styles from "./index.module.css";

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
    <div className={classes}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerContent}>
            <h1><StaticImage src="../assets/uxixd-logo.png" alt="UXIXD Gifolio" placeholder="none" /></h1>
            <div className={styles.strapline}>100 days of <strong>UX</strong> &amp; <strong>IXD</strong> gifs</div>
          </div>
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
            <StaticImage src="../assets/uxixd-logo-alt.png" alt="UXIXD" placeholder="none" />
          </div>
          <div className={styles.footerSmallPrint}>
            <p>UX, IXD and IP invention with over 20 years experience leading in design with auto and tech brands. UXIXD provides consultancy, research, content creation, conception, direction and expert profile. Founded by <a href="https://www.linkedin.com/in/t-i-m-s-m-i-t-h/" target="_blank">Tim Smith</a>.</p>
          </div>
          <div className={styles.copyright}>
            <div>&copy; Tim Smith 2023</div>
            <Link to="/privacy">Privacy Policy</Link>
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