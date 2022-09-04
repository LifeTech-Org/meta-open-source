import React from "react";
import "./Section.css";
import SectionFooter from "../SectionFooter/SectionFooter";

function Section({ Component, sectionHeader, sectionAction }) {
  return (
    <div className="flexible">
      <article className="section container">
        <h2>{sectionHeader}</h2>
        <Component />
        <SectionFooter action={sectionAction} />
      </article>
    </div>
  );
}

export default Section;
