import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import Listing from "../Listing/Listing";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    try {
      fetch("https://www.reddit.com/r/reactjs.json")
        .then((res) => res.json())
        .then((json) => processPosts(json.data.children));
    } catch (e) {
      console.log("There was a problem.");
    }
  }, []);

  const processPosts = (posts) => {
    let postsHash = posts.reduce((hash, post) => {
      hash[post.data.id] = post.data;
      return hash;
    }, {});
    setPosts(postsHash);
  };

  const postsList = Object.keys(posts).map((id) => posts[id]);

  const handleUpvote = (postId) => {
    setPosts({
      ...posts,
      [postId]: {
        ...posts[postId],
        score: posts[postId].score + 1,
      },
    });
  };

  const handleDownvote = (postId) => {
    setPosts({
      ...posts,
      [postId]: {
        ...posts[postId],
        score: posts[postId].score - 1,
      },
    });
  };

  return (
    <>
      <Title type="Reddit" />
      <Listing
        posts={postsList}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
    </>
  );
};

export default App;
