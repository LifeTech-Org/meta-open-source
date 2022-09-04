import React from "react";

function FooterLinks({ title, links }) {
  return (
    <article className="footer__links">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href="/">{link}</a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default FooterLinks;
