import React, { useState, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState()

  // useEffect(() => {
  //   const mainMenuLi = document.getElementById("mainMenu").querySelectorAll("li");

  //   function changeActive() {
  //     mainMenuLi.forEach((n) => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  // }, []);

  let imgAvatar = "../asset/media/images/icons/icon-avatar.png";

  let menuList = [
    {
      id: 1,
      img: "../asset/media/images/icons/icon-avatar.png",
      link: "/"
    },
    {
      id: 2,
      img: imgAvatar,
      link: "/dashboard"
    },
    {
      id: 3,
      img: imgAvatar,
      link: "/"
    },
    {
      id: 4,
      img: imgAvatar,
      link: "/"
    },
    {
      id: 5,
      img: imgAvatar,
      link: "/"
    }
  ];

  let bottomMenuList = [
    {
      id: 6,
      img: imgAvatar,
    },
    {
      id: 7,
      img: imgAvatar,
    },
  ];

  const IconMenu = ({ iconMenu, id, link }) => (
    <li className={`${activeMenu == id && "active"}`} onClick={() => setActiveMenu(id)}>
      <a href={link}>
        <img className="icon-menu" src={iconMenu} alt="icon-menu" />
      </a>
    </li>
  );

  return (
    <div className="block-menu-wrapper">
      <img className="icon-avatar" src={imgAvatar} alt="icon-avatar" />
      <ul id="mainMenu">
        {menuList.map(e => (
          <IconMenu id={e.id} key={e.id} iconMenu={e.img} link={e.link} />
        ))}
      </ul>
      <ul className="last-menu">
        {bottomMenuList.map(e => (
          <IconMenu id={e.id} key={e.id} iconMenu={e.img} />
        ))}
      </ul>
    </div>
  );
}


export default Menu;
