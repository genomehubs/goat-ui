import React, { memo, useEffect, useRef, useState } from "react";

import Grid from "@mui/material/Grid2";
import NavLink from "./NavLink";
import { compose } from "recompose";
import { link as linkStyle } from "./Styles.scss";
import qs from "../functions/qs";
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
        className={linkStyle}
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
      <Grid>
        <blockquote style={{ margin: 0 }}>
          When using these data, please cite{" "}
          <NavLink
            href="https://doi.org/10.12688/wellcomeopenres.18658.1"
            title="external:"
            className={linkStyle}
          >
            Genomes on a Tree
          </NavLink>{" "}
          and the original data {sourcesLink}
        </blockquote>
      </Grid>
    </Grid>
  );
};

export default compose(withSiteName)(Citation);
