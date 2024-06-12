import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    var myNav = document.querySelector("#nav");
    const navMenu = document.querySelector(".menu-ham");
    const divBtn = document.querySelector("#div-btn");
    divBtn.addEventListener("click", () => {
      navMenu.classList.toggle("menu-ham-show");
    });
    window.onscroll = function () {
      "use strict";
      if (
        document.body.scrollTop >= 20 ||
        document.documentElement.scrollTop >= 20
      ) {
        myNav.classList.add("scroll");
      } else {
        myNav.classList.remove("scroll");
      }
    };
  }, []);
  return (
    <section id="nav" className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div id="div-btn">
        <i className="bi bi-list ham-icon"></i>
        <div className="menu-ham">
          <a href="#welcome">Home</a>

          <a href="#classes">Classes </a>

          <a href="#trainers">Trainer</a>

          <a href="#review">Review</a>

          <a href="#contact">Contact</a>

          <a className="join-us" href="#welcome">
            JOIN US
          </a>
        </div>
      </div>

      <div className="menu">
        <a href="#welcome">Home</a>

        <a href="#classes">Classes </a>

        <a href="#trainers">Trainer</a>

        <a href="#review">Review</a>

        <a href="#contact">Contact</a>

        <a className="join-us" href="#welcome">
          JOIN US
        </a>
      </div>
    </section>
  );
}
