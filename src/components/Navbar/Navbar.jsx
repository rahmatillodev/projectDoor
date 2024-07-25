import React from "react";
import "./Navbar.css";
import { FaAngleDown, FaTelegram } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import flag from "../../assets/flag.png";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <img src={logo} alt="logo" />
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
              <a href="#">Bosh sahifa</a>
              <div className="navbarDropDown">
                <a href="#">
                  Katalog <FaAngleDown />
                </a>
                <div className="dropdownElements">
                  <a href="#">Katalog 1</a>
                  <a href="#">Katalog 2</a>
                  <a href="#">Katalog 3</a>
                  <a href="#">Katalog 4</a>
                </div>
              </div>
              <a href="#">Yetkazib berish va o'rnatish</a>
              <a href="#">To'lov</a>
              <a href="#">Biz bilan bog'lanish</a>
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
