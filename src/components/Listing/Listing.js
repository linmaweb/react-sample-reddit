import React from "react";
import Post from "../Post/Post";
import "./Listing.css";

const Listing = ({ posts, onUpvote, onDownvote }) => (
  <ul className="reddit-listing">
    {posts
      .sort((p1, p2) => p2.score - p1.score)
      .map((post) => (
        <li key={post.id}>
          <Post post={post} onUpvote={onUpvote} onDownvote={onDownvote} />
        </li>
      ))}
  </ul>
);

export default Listing;
