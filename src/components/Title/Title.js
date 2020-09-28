import React from "react";

const Title = ({ type }) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="title">React Sample Project: {type}</h1>
      </div>
    </div>
  );
};

export default Title;
