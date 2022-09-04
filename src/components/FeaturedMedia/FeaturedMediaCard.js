import React from "react";

function FeaturedMediaCard({ img, title, date }) {
  return (
    <a href="/">
      <article className="featured__media__card">
        <div className="img__container">
          <img alt={img.alt} src={img.src} />
        </div>
        <h3>{title}</h3>
        <footer>
          <time dateTime={date}>{date}</time>
        </footer>
      </article>
    </a>
  );
}

export default FeaturedMediaCard;
