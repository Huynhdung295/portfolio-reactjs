import React from "react";
function Header() {
  return (
    <header>
      <a className="name" href="./">
        Huỳnh Dũng
      </a>
      <div className="wrap">
        <div className="icons">
          <a
            href="https://www.facebook.com/hhdungfed295/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-twitter" />
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-instagram" />
          </a>
        </div>

        <div className="menuIcon js-menuBtn" />
      </div>

      <nav className="global-nav">
        <ul className="global-nav__list">
          <li>
            <a className="hoverEffectText" href="./">
              HOME
            </a>
          </li>
          <li>
            <a className="hoverEffectText" href="./">
              WORKS
            </a>
          </li>
          <li>
            <a className="hoverEffectText" href="./">
              ABOUT ME
            </a>
          </li>
          <li>
            <a className="js-contact hoverEffectText" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      <div className="curtain" />

      <div className="loader" />
    </header>
  );
}

export default Header;
