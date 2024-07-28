import React from "react";
import "./Navbar.css";
import { FaAngleDown, FaTelegram } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import flag from "../../assets/flag.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <nav>
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="navbar">
          <div className="navbarTop">
            <p>{t("navbar.navbarTopLink1")}</p>
            <p>
              <FaTelegram className="navTelegramIcon" />
              {t("navbar.navbarTopLink2")}
            </p>
            <div className="navbarTopRight">
              <p>{t("navbar.navbarTopLink3")}</p>
              <h3>
                <LuPhone /> +998987654321
              </h3>
            </div>
          </div>
          <div className="navbarBottom">
            <div className="navbarBottomLinks">
              <Link to="/">{t("navbar.navbarBottomLink1")}</Link>
              <div className="navbarDropDown">
                <Link to="katalog">
                  {t("navbar.navbarBottomLink2")} <FaAngleDown />
                </Link>
                <div className="dropdownElements">
                  <Link to="katalog">{t("navbar.navbarBottomLink2")} 1</Link>
                  <Link to="katalog">{t("navbar.navbarBottomLink2")} 2</Link>
                  <Link to="katalog">{t("navbar.navbarBottomLink2")} 3</Link>
                  <Link to="katalog">{t("navbar.navbarBottomLink2")} 4</Link>
                </div>
              </div>
              <Link to="delivery">{t("navbar.navbarBottomLink3")}</Link>
              <Link to="pay">{t("navbar.navbarBottomLink4")}</Link>
              <Link to="contact">{t("navbar.navbarBottomLink5")}</Link>
            </div>
            <div className="languages">
              <div onClick={() => changeLanguage("kz")} className="language">
                <img src={flag} alt="language" />
                <span>Kz</span>
                <FaAngleDown className="languageIcon" />
              </div>
              <div className="anotherLanguage">
              <div onClick={() => changeLanguage("ru")} className="language">
                <img src={flag} alt="language" />
                <span>Rus</span>
              </div>
                <div onClick={() => changeLanguage("uz")} className="language">
                  <img src={flag} alt="language" />
                  <span>Uzb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
