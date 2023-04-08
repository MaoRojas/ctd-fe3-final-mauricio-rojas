import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Footer.css";
import DH from "..//..//assets/img/DHf.png";
import icofb from "..//..//assets/img/ico-facebook.png";
import icoin from "..//..//assets/img/ico-instagram.png";
import icoti from "..//..//assets/img/ico-tiktok.png";
import icowh from "..//..//assets/img/ico-whatsapp.png";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <div className="footer-container">
        <div className="linkcontacto">
          <img className="dh" src={DH} />    
        </div>
        <div className="redes">
          <img className="pequena" src={icofb} />
          <img className="pequena" src={icoin} />
          <img className="pequena" src={icoti} />
          <img className="pequena" src={icowh} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
