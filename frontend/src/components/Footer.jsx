// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo2.png" alt="logo" />
      </div>
      <div>
        <h4>Suporte</h4>
        <ul>
          <li>RS, Porto Alegre</li>
          <li>CozinhaFF@gmail.com</li>
          <li>(51) 99853-2191</li>
        </ul>
      </div>
      <div>
        <h4>Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/donate"}>Doe</Link>
          </li>
          <li>
            <Link to={"/about"}>Sobre</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contatos</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Siga</h4>
        <ul>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaSquareTwitter />
              </span>{" "}
              <span>Twitter (X)</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaYoutube />
              </span>{" "}
              <span>Youtube</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com/cozinheiros_do_bem/"}>
              {""}
              <span>
                <FaSquareInstagram />
              </span>{" "}
              <span>Instagram</span>{""}
            </Link>
          </li>
          <li>
            <Link to={"https://www.facebook.com/cozinheirosdobem"}>
              {""}
              <span>
                <FaFacebook />
              </span>{" "}
              <span>Facebook</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;