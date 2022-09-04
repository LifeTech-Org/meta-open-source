import React from "react";
import { useEffect } from "react";

function ShowCaseCard({ img }) {
  useEffect(() => {
    const resize = () => {
      const allCards = document.getElementsByClassName("showcase__card");
      for (var i = 0; i < allCards.length; i++) {
        document.getElementsByClassName("showcase__card")[i].style.minHeight =
          document.getElementsByClassName("showcase__card")[i].clientWidth +
          "px";
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div className="showcase__card" id="showcase__card">
      <img src={img.src} alt={img.alt} />
    </div>
  );
}

export default ShowCaseCard;
