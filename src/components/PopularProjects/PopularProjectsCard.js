import React from "react";
import ViewProjectAction from "./ViewProjectAction";

function PopularProjectsCard({ img, category, title, text }) {
  return (
    <a href="/">
      <article className="popular__projects__card">
        <img src={img.src} alt={img.alt} />
        <div className="padding__card">
          <section>
            <b>{category}</b>
          </section>
          <section>
            <article>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          </section>
          <ViewProjectAction />
        </div>
      </article>
    </a>
  );
}

export default PopularProjectsCard;
