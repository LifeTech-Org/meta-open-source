import React from "react";
import "./PopularProjects.css";
import PopularProjectsImage1 from "../../assets/imgs/popular__projects__1.png";
import PopularProjectsImage2 from "../../assets/imgs/popular__projects__2.jpg";
import PopularProjectsImage3 from "../../assets/imgs/popular__projects__3.png";
import PopularProjectsCard from "./PopularProjectsCard";

function PopularProjects() {
  return (
    <section className="popular__projects__cards">
      <PopularProjectsCard
        img={{ src: PopularProjectsImage1, alt: "popular projects image 1" }}
        category={"documentation"}
        title={"docusaurus"}
        text={"setup a website for your documentation quickly and easily."}
      />
      <PopularProjectsCard
        img={{ src: PopularProjectsImage2, alt: "popular projects image 2" }}
        category={"frameworks"}
        title={"react"}
        text={"a JavaScript framework for building awesome user interfaces."}
      />
      <PopularProjectsCard
        img={{ src: PopularProjectsImage3, alt: "popular projects image 3" }}
        category={"frameworks"}
        title={"pyTorch"}
        text={
          "a Python-based machine learning framework for dynamic neural networks."
        }
      />
    </section>
  );
}

export default PopularProjects;
