import React, { useState } from "react";
import classnames from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import LazyLoad from "react-lazy-load";
import { isMobile } from "react-device-detect";
import { useScrollPosition } from "../utils/hooks";
import "../styles/base.css";
import * as styles from "./template.module.css";
import logoFooter from "../assets/uxixd-logo-alt.png";
import iconExternal from "../assets/icon-external.png";

const Template = ({ gifs, allFiles, title }) => {
  const scrollY = useScrollPosition();
  const classes = classnames(styles.container, {
    [styles.scrolled]: scrollY > 0
  });

  const renderAll = [];

  const [toggledGif, setToggledGif] = useState(null);

  const renderGifs = gifs.map((gif, i) => {
    const itemClasses = classnames(styles.item, styles.itemGif, {
      [styles.itemHover]: toggledGif === i + 1
    });
    return (
      <li
        key={`key${gif.day}-${i}`}
        className={itemClasses}
        onClick={() => isMobile && setToggledGif(toggledGif === i + 1 ? null : i + 1)}
        onMouseEnter={() => setToggledGif(i + 1)}
        onMouseLeave={() => setToggledGif(null)}
        type="button"
        role="button"
      >
        <div className={styles.caption}>
          <div className={styles.captionInner}>
            <div className={styles.day}>Day {gif.day}</div>
            <p>{gif.content}</p>
            <p className={styles.client}><strong>{gif.client}</strong></p>
          </div>
        </div>
        <div className={styles.gif}>
          {
            allFiles.map(item => item.relativePath === gif.gif
              ? item.extension === "mp4"
                ? <LazyLoad key={item.relativePath}><video key={item.relativePath} autoPlay loop playsInline muted><source src={item.publicURL} type="video/mp4" /><track kind="captions" /></video></LazyLoad>
                : <img key={item.publicURL} src={item.publicURL} alt="" />
              : "")
          }
          <div className={`${styles.itemNumber} ${i === 0 ? styles.newItem : ""}`}>{i === 0 ? "NEW" : gif.day}</div>
        </div>
      </li>
    );
  });

  const noOfBlanks = 100 - gifs.length;

  const renderBlanks = [...Array(noOfBlanks)].map((_, i) => (
    <li className={`${styles.item} ${styles.itemBlank}`} key={`key${i}`}><div /></li>
  ));

  renderAll.push(renderGifs);
  renderAll.push(renderBlanks);

  return (
    <div className={classes}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={`${styles.headerButton} ${styles.buttonXX}`}><a href="https://uxixd.com" aria-label="XX"> </a></div>
          <div className={`${styles.headerButton} ${styles.buttonLinktree}`}><a href="https://linktr.ee/uxixd" aria-label="Linktree"> </a></div>
          <div className={styles.headerContent}>
            <h1><StaticImage src="../assets/uxixd-logo.png" alt="UXIXD Gifolio" placeholder="none" /></h1>
            <div className={styles.strapline}>{title || "Test"}</div>
          </div>
          <div className={`${styles.headerButton} ${styles.buttonEmail}`}><a href="mailto:gifolio@uxixd.com" aria-label="Email"> </a></div>
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
            <div>
              <span className={styles.copy}>&copy;</span> Tim Smith 2023
            </div>
            <a href="https://uxixd.com/#privacy" target="_blank" rel="noreferrer">Privacy Policy <img src={iconExternal} alt="" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Template;
