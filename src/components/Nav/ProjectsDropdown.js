import React from "react";
import DocusaurusImage from "../../assets/imgs/docusaurus.png";

function ProjectsDropdown() {
  return (
    <section className="projects__dropdown">
      <Column title={"featured projects"} Component={Docusaurus} />
      <div className="col2">
        <Column
          title={"by language"}
          Component={() =>
            LinksGroup(["python", "typescript", "c++", "go", "java", "obj-c"])
          }
        />
        <Column
          title={"projects"}
          Component={() => LinksGroup(["featured projects", "view all"])}
        />
      </div>
    </section>
  );
}

const Column = ({ title, Component }) => {
  return (
    <article className="column">
      <h4>{title}</h4>
      <Component />
    </article>
  );
};

const Docusaurus = () => {
  return (
    <article className="docusaurus">
      <img src={DocusaurusImage} alt={"docusaurus icon"} />
      <h4>Docusaurus</h4>
      <p>
        This website is built with one of our open source projects, Docusaurus,
        which helps you build your website and documentation easily.
      </p>
    </article>
  );
};

const LinksGroup = (links) => {
  return (
    <ul>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a href="/">{link}</a>
          </li>
        );
      })}
    </ul>
  );
};
export default ProjectsDropdown;
