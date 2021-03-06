import React from "react";
// import Pagination from "@material-ui/lab/Pagination";
import TablePagination from "@material-ui/core/TablePagination";
import classnames from "classnames";
import { compose } from "recompose";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Styles.scss";
import withSearch from "../hocs/withSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SearchPagination = ({
  searchTerm,
  searchResults,
  setSearchTerm,
  setPreferSearchTerm,
}) => {
  if (!searchResults.status || !searchResults.status.hits) {
    return null;
  }
  let pageSize = searchResults.status.size;
  let offset = searchResults.status.offset;
  let resultCount = searchResults.status.hits;
  let count = Math.ceil(resultCount / pageSize);
  let page = offset / pageSize;
  let options = { ...searchTerm };
  const handleChange = (event, newPage) => {
    options.offset = newPage * pageSize;
    setPreferSearchTerm(true);
    setSearchTerm(options);
  };
  const handleChangeRowsPerPage = (event) => {
    options.offset = 0;
    options.size = parseInt(event.target.value, 10);
    setPreferSearchTerm(true);
    setSearchTerm(options);
  };
  if (resultCount <= 10) {
    return null;
  }
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50, 100]}
      component="div"
      count={resultCount}
      rowsPerPage={pageSize}
      page={page}
      onChangePage={handleChange}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default compose(withSearch)(SearchPagination);
