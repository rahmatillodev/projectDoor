import React from "react";
import "./Navbar.css";
import { FaAngleDown, FaTelegram } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import flag from "../../assets/flag.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="navbar">
          <div className="navbarTop">
            <p>Buyurtma asosida eshiklar ishlab chiqaruvchi kompayniya</p>
            <p>
              <FaTelegram className="navTelegramIcon" />
              Bizga telegramda yozing
            </p>
            <div className="navbarTopRight">
              <p>Biz hozir ishlayabmiz, qo’ng’iroq qiling:</p>
              <h3>
                <LuPhone /> +998987654321
              </h3>
            </div>
          </div>
          <div className="navbarBottom">
            <div className="navbarBottomLinks">
              <Link to="/">Bosh sahifa</Link>
              <div className="navbarDropDown">
                <Link to="katalog">
                  Katalog <FaAngleDown />
                </Link>
                <div className="dropdownElements">
                  <Link to="katalog">Katalog 1</Link>
                  <Link to="katalog">Katalog 2</Link>
                  <Link to="katalog">Katalog 3</Link>
                  <Link to="katalog">Katalog 4</Link>
                </div>
              </div>
              <Link to="delivery">Yetkazib berish va o'rnatish</Link>
              <Link to="pay">To'lov</Link>
              <Link to="contact">Biz bilan bog'lanish</Link>
            </div>
            <div className="languages">
              <div className="language">
                <img src={flag} alt="language" />
                <span>Uzb</span>
                <FaAngleDown className="languageIcon" />
              </div>
              <div className="language">
                <img src={flag} alt="language" />
                <span>Uzb</span>
                <FaAngleDown className="languageIcon" />
              </div>
              <div className="language">
                <img src={flag} alt="language" />
                <span>Uzb</span>
                <FaAngleDown className="languageIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
