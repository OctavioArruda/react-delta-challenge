import React, { FC } from "react";
import "./styles.css";

interface Props {
  onButtonClick: () => void;
  isExpanded: boolean;
}

const Menu: FC<Props> = ({ onButtonClick, isExpanded }) => {
  return (
    <>
      {isExpanded && <div className="overlay"></div>}
      <nav className={`menu-nav ${isExpanded ? "menu-nav--expanded" : ""}`}>
        <button className="close-button" onClick={onButtonClick}>
          &#x2715;
        </button>
        <ul className="menu-list">
          <li className="menu-list__item">
            <a href="#/">Menu 1</a>
          </li>
          <li className="menu-list__item">
            <a href="#/">Menu 2</a>
          </li>
          <li className="menu-list__item">
            <a href="#/">Menu 3</a>
          </li>
          <li className="menu-list__item">
            <a href="#/">Menu 4</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
