import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return ( 
    <div>
      <LoadingBar />
      {props.loading === true ? null : <NewTweet />}
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
