import React from "react";
import "./home.css";
import NavbarHome from "../../../components/navbarHome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <div>
      <div className="slide s1">
        <NavbarHome />
        <div className="content s1">
          <div className="circle c1">
            <Link to={"/login"} className="circle c2">
              <span>banna</span>
              <br />
              <p>click here</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="slide s2"></div>
      <div className="slide s3">
        <div className="content s3 left">
          <span>
            b<br />a<br />n<br />n<br />a
          </span>
          <Link to={"/menuPreOrder"} className="btn-menu m1">
            menu
          </Link>
        </div>
        <div className="content s3 right">
          <h1>welcome</h1>
          <h2>
            to <span>banna</span>
          </h2>
        </div>
      </div>
      <span className="wordslide s4">bannabanna</span>
      <div className="slide s4">
        <div className="card c1">
          <div className="img-menu">
            <p>banna</p>
            <div className="coaster"></div>
            <div className="img-menu im i1"></div>
          </div>
          <span>เมนูผลไม้</span>
          <Link to={"/menuPreOrder"} className="btn-menu m2">
            เลือกเมนู
          </Link>
        </div>
        <div className="card c2">
          <div className="img-menu">
            <p>banna</p>
            <div className="coaster"></div>
            <div className="img-menu im i2"></div>
          </div>
          <span>เมนูกาแฟ</span>
          <Link to={"/menuPreOrder"} className="btn-menu m2">
            เลือกเมนู
          </Link>
        </div>
        <div className="card c3">
          <div className="img-menu">
            <p>banna</p>
            <div className="coaster"></div>
            <div className="img-menu im i3"></div>
          </div>
          <span>เมนูของทานเล่น</span>
          <Link to={"/menuPreOrder"} className="btn-menu m2">
            เลือกเมนู
          </Link>
        </div>
        <div className="card c4">
          <div className="img-menu">
            <p>banna</p>
            <div className="coaster"></div>
            <div className="img-menu im i4"></div>
          </div>
          <span>เมนูของทานเล่น</span>
          <Link to={"/menuPreOrder"} className="btn-menu m2">
            เลือกเมนู
          </Link>
        </div>
      </div>
      <div className="slide s5">
        <div className="content s5 left"></div>
        <div className="content s5 right">
          <span className="span s5-1">
            b<br />a<br />n<br />n<br />a
          </span>
          <div className="img-menu im i5"></div>
          <div className="text i5">
            <span className="span s5-2">coffee</span>
            <p>
              เปิดประสบการณ์ใหม่สำหรับประสบการณ์กาแฟที่หรูหรา
              <br />
              และประทับใจ ด้วยทุกเฟรเวอร์ของรสชาติที่ทันสมัย
              <br />
              ในแบบที่ทำให้คุณตื่นเต้นทุกสัมผัส
            </p>
            <Link to={"/menuPreOrder"} className="btn-menu m1">
              menu
            </Link>
          </div>
        </div>
      </div>
      <div className="slide s6">
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
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              <a href="https://github.com/BHU23">
                <FontAwesomeIcon icon={faXTwitter} className="icon" />
              </a>
              <a href="https://github.com/BHU23">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a href="https://github.com/BHU23">
                <FontAwesomeIcon icon={faGithub} className="icon" />
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
    </div>
  );
}
