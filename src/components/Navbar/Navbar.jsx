import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import logo from "../../assets/navbarLogo.svg";
import FlagKz from "../../assets/kz.png";
import FlagUzb from "../../assets/uzb.png";
import FlagRus from "../../assets/rus.png";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiPhone } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrollPage, setscrollPage] = useState("nav");
  const [mediaModal, setMediaModal] = useState(true)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // setLangText(text);
  };
  function scrollDown() {
    if (window.scrollY > 200) {
      setscrollPage("nav scroll");
    } else {
      setscrollPage("nav");
    }
  }

  window.addEventListener("scroll", scrollDown);

  return (
    <div className="navbarWrapper">
      <div className={scrollPage}>
        <div className="navImage">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          {mediaModal && <FaBars className="bars" onClick={()=>setMediaModal(false)} />}
        </div>
        <div className={mediaModal ? "navLinks" : "navLinks show"}>
          <div className="dropDown">  
            <NavLink to="catalog">
              {t("navbar.katalog")} <FaChevronDown />{" "}
            </NavLink>
            <div className="dropDownElement">
              <Link to="catalog">{t("navbar.katalog")}</Link>
              <Link to="catalog">{t("navbar.katalog")}</Link>
              <Link to="catalog">{t("navbar.katalog")}</Link>
              <Link to="catalog">{t("navbar.katalog")}</Link>
            </div>
          </div>
          <NavLink to="delivery">{t("navbar.delivery")}</NavLink>
          <NavLink to="pay">{t("navbar.pay")}</NavLink>
          <NavLink to="contact">{t("navbar.contact")}</NavLink>
          <div className="navContact">
            <span>
              <FiPhone />
            </span>
            <span>+998 90 010-85-10</span>
          </div>
          <div className="languages">
            <div className="nowFlag">
            <img src={FlagKz} alt="language" />
            <span>KZ</span>
            </div>
            <div className="another">
              <div className="language" onClick={()=>changeLanguage("uz")}>
                <img src={FlagUzb} alt="language" />
                <span>UZ</span>
              </div>
              <div className="language" onClick={()=>changeLanguage("ru")} >
                <img src={FlagRus} alt="language" />
                <span>RU</span>
              </div>
              <div className="language" onClick={()=>changeLanguage("kz")} >
                <img src={FlagKz} alt="language" />
                <span>KZ</span>
              </div>
            </div>
          </div>
          <div className="navClose" onClick={()=>setMediaModal(true)} >
            <CgClose/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
