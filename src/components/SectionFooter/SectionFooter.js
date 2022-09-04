import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import "./SectionFooter.css";

function SectionFooter({ action }) {
  return (
    <footer className="section__footer">
      <div className="hr"></div>
      <div style={{ padding: "25px 0px" }}>
        <ActionButton text={action} />
      </div>
    </footer>
  );
}

export default SectionFooter;
