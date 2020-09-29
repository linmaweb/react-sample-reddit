import React from "react";
import "./Voting.css";

const Voting = ({ post, onUpvote, onDownvote }) => (
  <div className="voting">
    <i className="fa fa-arrow-up" onClick={onUpvote} />
    <div className="score">{post.score}</div>
    <i className="fa fa-arrow-down" onClick={onDownvote} />
  </div>
);

export default Voting;
