import React from "react";
import "./Footer.css";
import Meta from "../../assets/imgs/Meta.svg";
import FooterLinks from "./FooterLinks";
import Facebook from "../../assets/imgs/facebook.svg";
import Twitter from "../../assets/imgs/twitter.svg";
import Youtube from "../../assets/imgs/youtube.svg";
import Linkedin from "../../assets/imgs/linkedin.svg";

function Footer() {
  return (
    <div className="flexible flexible__footer">
      <footer className="footer container">
        <section className="anchor">
          <div className="socials">
            <a href="/">
              <img src={Meta} alt={"meta icon"} className="meta__icon" />
            </a>
            <article>
              <h3>follow us</h3>
              <address>
                <a href="/">
                  <img src={Facebook} alt="facebook icon" />
                </a>
                <a href="/">
                  <img src={Twitter} alt="twitter icon" />
                </a>
                <a href="/">
                  <img src={Youtube} alt="youtube icon" />
                </a>
                <a href="/">
                  <img src={Linkedin} alt="linkedin icon" />
                </a>
              </address>
            </article>
          </div>
          <FooterLinks
            title={"site map"}
            links={["projects", "FAQ", "about", "get involved"]}
          />
          <FooterLinks
            title={"information"}
            links={["blog", "linux", "careers"]}
          />
          <FooterLinks
            title={"connect"}
            links={["github", "fB for developers"]}
          />
        </section>
        <section className="meta__meta">
          <div className="copyright">&copy; 2022 Meta [Cloned by LifeTech]</div>
          <ul>
            {[
              "code of conduct",
              "privacy policily",
              "cookies",
              "data policies",
              "terms of use",
              "data policy",
            ].map((link, index) => {
              return (
                <li key={index}>
                  <a href="/">{link}</a>
                </li>
              );
            })}
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
