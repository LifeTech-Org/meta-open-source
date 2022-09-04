import React, { useState } from "react";
import Dropdown from "./Dropdown";
import MediaDropdown from "./MediaDropdown";
import "./Nav.css";
import ProjectsDropdown from "./ProjectsDropdown";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

function Nav() {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(-1);
  const [selectedMobileLinkIndex, setSelectedMobileLinkIndex] = useState(-1);
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <nav>
      <ul className="ul">
        <LinksList
          selectedLinkIndex={selectedLinkIndex}
          setSelectedLinkIndex={setSelectedLinkIndex}
          mobile={false}
        />
        <li>
          <a href="/" className="nav__button">
            get involved
          </a>
        </li>
      </ul>
      <div className="menu__div">
        {showMobileNav ? (
          <CloseSharpIcon
            className="menu"
            onClick={() => setShowMobileNav(false)}
          />
        ) : (
          <MenuSharpIcon
            className="menu"
            onClick={() => setShowMobileNav(true)}
          />
        )}
      </div>
      {showMobileNav && (
        <ul className="mobile">
          <LinksList
            selectedMobileLinkIndex={selectedMobileLinkIndex}
            setSelectedMobileLinkIndex={setSelectedMobileLinkIndex}
            mobile={true}
          />
        </ul>
      )}
      {selectedLinkIndex === 0 && (
        <Dropdown
          mobile={false}
          title={"projects"}
          Component={ProjectsDropdown}
        />
      )}
      {selectedLinkIndex === 3 && (
        <Dropdown mobile={false} title={"media"} Component={MediaDropdown} />
      )}
    </nav>
  );
}

const LinksList = ({
  selectedLinkIndex,
  setSelectedLinkIndex,
  selectedMobileLinkIndex,
  setSelectedMobileLinkIndex,
  mobile,
}) => {
  return (
    <>
      {[
        { name: "projects", dropdown: true },
        { name: "blog", dropdown: false },
        { name: "showcase", dropdown: false },
        { name: "media", dropdown: true },
        { name: "about", dropdown: false },
        { name: "careers", dropdown: false },
      ].map((link, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              mobile
                ? selectedMobileLinkIndex === index
                  ? setSelectedMobileLinkIndex(-1)
                  : setSelectedMobileLinkIndex(index)
                : selectedLinkIndex === index
                ? setSelectedLinkIndex(-1)
                : setSelectedLinkIndex(index);
            }}
          >
            <a href={"#" + link.name}>
              {link.name}
              {link.dropdown && (
                <KeyboardArrowDownOutlinedIcon className="dropbtn" />
              )}
            </a>
            {mobile &&
              link.name === "projects" &&
              selectedMobileLinkIndex === 0 && (
                <Dropdown
                  mobile={true}
                  title={""}
                  Component={ProjectsDropdown}
                />
              )}
            {mobile &&
              link.name === "media" &&
              selectedMobileLinkIndex === 3 && (
                <Dropdown mobile={true} title={""} Component={MediaDropdown} />
              )}
          </li>
        );
      })}
    </>
  );
};

export default Nav;
