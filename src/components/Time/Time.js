import React from "react";
import moment from "moment";

const Time = ({ time, isUnixTime }) => {
  const computeTimeString = (time, isUnixTime) => {
    if (isUnixTime) {
      return moment.unix(time).fromNow();
    } else {
      return moment(time).fromNow();
    }
  };
  return <span className="time">{computeTimeString(time, isUnixTime)}</span>;
};

export default Time;
