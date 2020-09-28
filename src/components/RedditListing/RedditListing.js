import React from "react";
import RedditPost from "../RedditPost/RedditPost";
import "./RedditListing.css";

const RedditListing = ({ posts, onUpvote, onDownvote }) => (
  <ul className="reddit-listing">
    {posts
      .sort((p1, p2) => p2.score - p1.score)
      .map((post) => (
        <li key={post.id}>
          <RedditPost post={post} onUpvote={onUpvote} onDownvote={onDownvote} />
        </li>
      ))}
  </ul>
);

export default RedditListing;
