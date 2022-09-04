import React from "react";

function MediaDropdown() {
  return (
    <section className="media__dropdown">
      <ul>
        {["overview", "blog", "videos", "podcast"].map((link, index) => {
          return (
            <li key={index}>
              <a href="/">{link}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MediaDropdown;
