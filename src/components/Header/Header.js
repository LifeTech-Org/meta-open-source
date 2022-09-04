import React from "react";
import "./Header.css";
import MetaIcon from "../../assets/imgs/Meta-Open-Source.svg";

function Header() {
  return (
    <header>
      <a href="/">
        <img src={MetaIcon} alt="Meta Icon" />
      </a>
    </header>
  );
}

export default Header;
