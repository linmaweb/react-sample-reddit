import React from "react";
import Time from "../Time/Time";
import Thumbnail from "../Thumbnail/Thumbnail";
import Voting from "../Voting/Voting";
import "./Post.css";

const Post = ({ post, onUpvote, onDownvote }) => {
  return (
    <div className="reddit-post">
      <Voting
        post={post}
        onUpvote={() => onUpvote(post.id)}
        onDownvote={() => onDownvote(post.id)}
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
};

export default Post;
