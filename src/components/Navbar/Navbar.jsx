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

const Navbar = ({setFirstFilter}) => {
  const { t, i18n } = useTranslation();
  const [scrollPage, setscrollPage] = useState("nav");
  const [mediaModal, setMediaModal] = useState(true)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  function scrollDown() {
    if (window.scrollY > 100) {
      setscrollPage("nav scroll");
    } else {
      setscrollPage("nav");
    }
  }

  window.addEventListener("scroll", scrollDown);

  const handleLinkClick = () => {
    setMediaModal(true);
  };

  return (
    <div className="navbarWrapper">
      <div className={scrollPage}>
        <div className="navImage">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="logo" />
          </Link>
          {mediaModal && <FaBars className="bars" onClick={()=>setMediaModal(false)} />}
        </div>
        <div className={mediaModal ? "navLinks" : "navLinks show"}>
          <div className="dropDown">  
            <NavLink onClick={handleLinkClick}>
              {t("navbar.katalog")} <FaChevronDown />{" "}
            </NavLink>
            <div className="dropDownElement">
              <Link onClick={() => {setFirstFilter(1); handleLinkClick();}} to="catalog">Zinalar</Link>
              <Link onClick={() => {setFirstFilter(2); handleLinkClick();}} to="catalog">Eshiklar</Link>
              <Link onClick={() => {setFirstFilter(3); handleLinkClick();}} to="catalog">Stullar</Link>
              <Link onClick={() => {setFirstFilter(4); handleLinkClick();}} to="catalog">Qozonlar</Link>
            </div>
          </div>
          <NavLink to="delivery" onClick={handleLinkClick}>{t("navbar.delivery")}</NavLink>
          <NavLink to="pay" onClick={handleLinkClick}>{t("navbar.pay")}</NavLink>
          <NavLink to="contact" onClick={handleLinkClick}>{t("navbar.contact")}</NavLink>
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
              <div className="language" onClick={() => {changeLanguage("uz"); handleLinkClick();}}>
                <img src={FlagUzb} alt="language" />
                <span>UZ</span>
              </div>
              <div className="language" onClick={() => {changeLanguage("ru"); handleLinkClick();}} >
                <img src={FlagRus} alt="language" />
                <span>RU</span>
              </div>
              <div className="language" onClick={() => {changeLanguage("kz"); handleLinkClick();}} >
                <img src={FlagKz} alt="language" />
                <span>KZ</span>
              </div>
            </div>
          </div>
          <div className="navClose" onClick={handleLinkClick} >
            <CgClose/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
