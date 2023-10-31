import React, { useEffect } from "react";
import "./Menu.css";

const Menu = () => {

  useEffect(() => {
    const mainMenuLi = document.getElementById("mainMenu").querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  let imgAvatar = "../asset/media/images/icons/icon-avatar.png";

  return (
    <div className="block-menu-wrapper">
      <img className="icon-avatar" src={imgAvatar} alt="icon-avatar" />
      <ul id="mainMenu">
        <IconMenu iconMenu={imgAvatar} />
        <IconMenu iconMenu={imgAvatar} />
        <IconMenu iconMenu={imgAvatar} />
        <IconMenu iconMenu={imgAvatar} />
        <IconMenu iconMenu={imgAvatar} />
      </ul>
      <ul className="last-menu">
        <IconMenu iconMenu={imgAvatar} />
        <IconMenu iconMenu={imgAvatar} />
      </ul>
    </div>
  );
}

const IconMenu = ({ iconMenu }) => (
  <li>
    <a href="#">
      <img className="icon-menu" src={iconMenu} alt="icon-menu" />
    </a>
  </li>
);

export default Menu;
