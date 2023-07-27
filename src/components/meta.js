import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const Meta = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
          siteUrl
        }
      }
    }
  `);

  const metaImage = "https://gifolio.uxixd.com/uxixd-meta-image.jpg";

  return (
    <>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.subtitle} />
      <meta name="image" content={metaImage} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.subtitle} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={site.siteMetadata.title} />
      <meta name="twitter:description" content={site.siteMetadata.subtitle} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:creator" content="UXIXD" />
    </>
  );
};

export default Meta;

