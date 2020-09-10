import React, { Component } from "react";
import PropTypes from "prop-types";
import Time from "../../funcs";
import Thumbnail from "../Thumbnail/Thumbnail";
import Voting from "../Voting/Voting";
import "./RedditPost.css";

export default class RedditPost extends Component {
  handleUpvoteClick = () => {
    this.props.onUpvote(this.props.post.id);
  };

  handleDownvoteClick = () => {
    this.props.onDownvote(this.props.post.id);
  };

  render() {
    const { post } = this.props;

    return (
      <div className="reddit-post">
        <Voting
          post={post}
          onUpvote={this.handleUpvoteClick}
          onDownvote={this.handleDownvoteClick}
        />
        <Thumbnail post={post} />
        <div className="content">
          <h3 className="title">
            <a href={post.url}>{post.title}</a>
          </h3>
          <div className="submitted">
            Submitted <Time time={post.created} isUnixTime={true} />
          </div>
          <a
            className="comments"
            href={`https://www.reddit.com${post.permalink}`}
          >
            {post.num_comments} comments
          </a>
        </div>
      </div>
    );
  }

  static propTypes = {
    post: PropTypes.object.isRequired,
    onUpvote: PropTypes.func.isRequired,
    onDownvote: PropTypes.func.isRequired,
  };
}
