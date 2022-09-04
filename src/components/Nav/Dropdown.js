import React from "react";

function Dropdown({ mobile, title, Component }) {
  return (
    <div className={mobile ? "dropdown m" : "dropdown w"}>
      <article className="article">
        <h2>{title}</h2>
      </article>
      <Component className="component" />
    </div>
  );
}

export default Dropdown;
