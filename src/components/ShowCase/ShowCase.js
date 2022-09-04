import React from "react";
import "./ShowCase.css";
import ActionButton from "../ActionButton/ActionButton";
import ShowCaseCard from "./ShowCaseCard";
import Nasa from "../../assets/imgs/nasa.svg";
import Diem from "../../assets/imgs/diem.svg";
import Slack from "../../assets/imgs/slack.svg";
import Att from "../../assets/imgs/att.svg";
import Amazon from "../../assets/imgs/amazon.svg";
import Ibm from "../../assets/imgs/ibm.svg";

function ShowCase() {
  return (
    <div className="flexible flexible__showcase">
      <section className="showcase container">
        <section className="showcase__cards">
          <ShowCaseCard img={{ src: Nasa, alt: "nasa image" }} />
          <ShowCaseCard img={{ src: Diem, alt: "diem image" }} />
          <ShowCaseCard img={{ src: Slack, alt: "slack image" }} />
          <ShowCaseCard img={{ src: Att, alt: "at&t image" }} />
          <ShowCaseCard img={{ src: Amazon, alt: "amazon image" }} />
          <ShowCaseCard img={{ src: Ibm, alt: "ibm image" }} />
        </section>
        <section className="showcase__article">
          <article>
            <b>showcase</b>
            <h3>globally trusted</h3>
            <p>
              Open source is used by teams of all shapes and sizes to create,
              iterate, and grow.
            </p>
            <ActionButton text={"see showcase"} />
          </article>
        </section>
      </section>
    </div>
  );
}

export default ShowCase;
