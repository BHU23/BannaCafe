import React from 'react'
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import './footer.css';
export default function Footer() {
  return (
    <div className="footer-member">
        <div className="content s6 left">
          <span>BANNA</span>
          <div className="img-logo"></div>
        </div>
        <div className="content s6 mid">
          <span>CONTACT</span>
          <div className="text-s6">
            <p>
              111/3, Surawithee 1, Suranaree
              <br />
              Mueang Nakhon Ratchasiima,
              <br />
              Nakho Ratchasiima, 30000
            </p>
            <p>
              <strong>EMAIL</strong> : SE_T08@sut.ac.th
            </p>
            <p>
              <strong>TEL.</strong> :0433333333
            </p>
            <div className="icon-s6">
              <a href="https://github.com/BHU23">
                <BsFacebook className="icon" />
              </a>
              <a href="https://github.com/BHU23">
                <RiTwitterXLine className="icon" />
              </a>
              <a href="https://github.com/BHU23">
                <LuInstagram className="icon" />
              </a>
              <a href="https://github.com/BHU23">
                <FaGithub className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="content s6 right">
          <span>LOCATION</span>
          <div className="text-s6">
             <Link to={"/menuPreOrder"}><div className="img-map"></div></Link>
          </div>
        </div>
      </div>
  )
}
