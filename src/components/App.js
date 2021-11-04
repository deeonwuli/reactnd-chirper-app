import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <div>
      <LoadingBar />
      {props.loading === true ? null : (
        <TweetPage match={{ params: { id: "3km0v4hf1ps92ajf4z2ytg" } }} />
      )}
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
