import React from "react";
import { connect } from "react-redux";
import {
  getTypesMap,
  getDisplayTypes,
  getGroupedTypes,
  fetchTypes,
} from "../selectors/types";

const withTypes = (WrappedComponent) => (props) => {
  const mapStateToProps = (state) => ({
    types: getTypesMap(state),
    displayTypes: getDisplayTypes(state),
    groupedTypes: getGroupedTypes(state),
  });
  const mapDispatchToProps = (dispatch) => ({
    fetchTypes: (result) => dispatch(fetchTypes(result)),
  });

  const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);

  return <Connected {...props} />;
};

export default withTypes;
