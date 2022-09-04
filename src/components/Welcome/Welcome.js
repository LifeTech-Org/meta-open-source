import React from "react";
import "./Welcome.css";
import ActionButton from "../ActionButton/ActionButton";
import Homehero from "../../assets/imgs/home-hero.jpg";

function Welcome() {
  return (
    <div className="flexible flexible__welcome">
      <div className="welcome container">
        <section className="welcome__article">
          <h2>meta open source</h2>
          <article>
            <h3>welcome to our community</h3>
            <p>
              Empowering diverse communities through open source technology.
            </p>
            <ActionButton text={"explore projects"} />
          </article>
        </section>
        <section className="welcome__image">
          <img src={Homehero} alt="home hero" />
        </section>
      </div>
    </div>
  );
}

export default Welcome;
