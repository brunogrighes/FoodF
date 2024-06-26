// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaFacebook, FaYoutube } from "react-icons/fa6";
// import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>INICIO</Link>
            </li>
            <li>
              <Link to={"/donate"}>DOE AQUI</Link>
            </li>
            <li>
              <Link to={"/about"}>SOBRE</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTATOS</Link>
            </li>
          </ul>
          <ul>
            <li>
              <FaBitcoin />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;