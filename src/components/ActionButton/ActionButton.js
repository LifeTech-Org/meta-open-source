import React from "react";
import "./ActionButton.css";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function ActionButton({ text }) {
  return (
    <a className="action__button" href="/">
      <ArrowCircleRightOutlinedIcon className="icon" />
      <span>{text}</span>
    </a>
  );
}

export default ActionButton;
