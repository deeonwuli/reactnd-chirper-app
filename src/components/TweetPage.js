import React from "react";
import {connect } from "react-redux"

function TweetPage(props) {
  console.log(props)
  return (
    <div>
      hi
    </div>
  );
}

function mapStateToProps ({authedUser, tweets, users}, props) {
  const {id } = props.match.params
  return {
    id,
    replies: tweets[id]
    ? []
    : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(TweetPage);
