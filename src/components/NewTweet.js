import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

function NewTweet(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = props;
    dispatch(handleAddTweet(text, id));
    setText("");
  };

  {
    /* todo: Redirect to / if submitted */
  }

  const tweetLeft = 280 - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={!text}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default connect()(NewTweet);
