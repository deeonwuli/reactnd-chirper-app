import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return ( 
    <div>
      <LoadingBar />
      {props.loading === true ? null : <Dashboard />}
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
