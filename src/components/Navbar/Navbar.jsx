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
  const [t,i18n] = useTranslation("global");

  const [scrollPage, setscrollPage] = useState("nav");
  const [mediaModal, setMediaModal] = useState(true)
  const [textlng, setTextlng] = useState("KZ")
  const [flag, setFlag] = useState(FlagKz)


  const changeLanguage = (lng,text,img) => {
    i18n.changeLanguage(lng);
    setTextlng(text)
    setFlag(img)
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
            <NavLink className="dropDownMenu">
              {t("navbar.katalog")} <FaChevronDown />
            </NavLink>
            <div className="dropDownElement">
              <Link onClick={() => {setFirstFilter("stair"); handleLinkClick();}} to="catalog">{t('navbar.stairs')}</Link>
              <Link onClick={() => {setFirstFilter("door"); handleLinkClick();}} to="catalog">{t('navbar.door')}</Link>
              <Link onClick={() => {setFirstFilter("table"); handleLinkClick();}} to="catalog">{t('navbar.chair')}</Link>
              <Link onClick={() => {setFirstFilter("cauldron"); handleLinkClick();}} to="catalog">{t('navbar.pot')}</Link>
              <Link onClick={() => {setFirstFilter("floor"); handleLinkClick();}} to="catalog">{t('navbar.pol')}</Link>

            </div>
          </div>
          <NavLink to="delivery" onClick={handleLinkClick}>{t("navbar.delivery")}</NavLink>
          <NavLink to="pay" onClick={handleLinkClick}>{t("navbar.pay")}</NavLink>
          <NavLink to="contact" onClick={handleLinkClick}>{t("navbar.contact")}</NavLink>
          <div className="navContact">
            <span>
              <FiPhone />
            </span>
            <a href="tel:+998900108510">+998 90 010-85-10</a>
          </div>
          <div className="languages">
            <div className="nowFlag">
            <img src={flag} alt="language" />
            <span>{textlng}</span>
            </div>
            <div className="another">
              <div className="language" onClick={() => {changeLanguage("kz","KZ",FlagKz); handleLinkClick();}} >
                <img src={FlagKz} alt="language" />
                <span>KZ</span>
              </div>
              <div className="language" onClick={() => {changeLanguage("ru","RU",FlagRus); handleLinkClick();}} >
                <img src={FlagRus} alt="language" />
                <span>RU</span>
              </div>
              <div className="language" onClick={() => {changeLanguage("uz","UZ",FlagUzb); handleLinkClick();}}>
                <img src={FlagUzb} alt="language" />
                <span>UZ</span>
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
