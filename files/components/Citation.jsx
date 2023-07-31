import React, { memo, useEffect, useRef, useState } from "react";

import { Grid } from "@material-ui/core";
import NavLink from "./NavLink";
import { compose } from "recompose";
import qs from "../functions/qs";
import styles from "./Styles.scss";
import { useNavigate } from "@reach/router";
import withSiteName from "../hocs/withSiteName";

const Citation = ({ basename, searchTerm, resultCount }) => {
  const navigate = useNavigate();
  if (resultCount == 0) {
    return null;
  }

  const showSources = (e) => {
    e.preventDefault();
    navigate(
      `${basename}/search?${qs.stringify({
        ...searchTerm,
        report: "sources",
      })}#${encodeURIComponent(searchTerm.query || searchTerm.x)}`
    );
  };
  let sourcesLink;
  if (!searchTerm.report || searchTerm.report != "sources") {
    sourcesLink = (
      <a
        href=""
        onClick={showSources}
        className={styles.link}
        style={{ textDecoration: "underline" }}
      >
        sources
      </a>
    );
  } else {
    sourcesLink = <a>sources, listed below</a>;
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      style={{ marginBottom: "-1em", width: "100%" }}
    >
      <Grid item>
        <blockquote style={{ margin: 0 }}>
          <a>When using these data, please cite </a>
          <NavLink
            href="https://doi.org/10.12688/wellcomeopenres.18658.1"
            title="external:"
            className={styles.link}
          >
            Genomes on a Tree
          </NavLink>
          <a> and the original data </a>
          {sourcesLink}
        </blockquote>
      </Grid>
    </Grid>
  );
};

export default compose(withSiteName)(Citation);
