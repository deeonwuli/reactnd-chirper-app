import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return <div>{props.loading === true ? null : <Dashboard />}</div>;
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
