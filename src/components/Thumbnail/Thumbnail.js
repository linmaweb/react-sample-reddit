import React from "react";
import "./Thumbnail.css";

const Thumbnail = ({ post }) => {
  if (post.is_self) {
    return <span className="thumbnail self" />;
  } else if (post.thumbnail === "default") {
    return <span className="thumbnail default" />;
  } else {
    return <img className="thumbnail" alt="thumbnail" src={post.thumbnail} />;
  }
};

export default Thumbnail;
