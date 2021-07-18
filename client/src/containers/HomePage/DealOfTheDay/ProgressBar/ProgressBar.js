import React from "react";
import ProgressBarUtil from "@ramonak/react-progress-bar";
import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <>
      <ProgressBarUtil
        completed={60}
        bgColor="#00A4FF"
        borderRadius="0%"
        isLabelVisible={false}
      />
      <small className="progress-bar-text">
        <span>65/100</span> Sold
      </small>
    </>
  );
};

export default ProgressBar;
