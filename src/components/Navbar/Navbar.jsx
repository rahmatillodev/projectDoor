import React, { useState } from "react";
import "./Navbar.css";
import { FaAngleDown, FaBars, FaTelegram } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import flag from "../../assets/flag.png";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [langText, setLangText] = useState("Kz")
  

  const changeLanguage = (lng,text) => {
    i18n.changeLanguage(lng);
    setLangText(text)
  };
  return (
    <nav data-aos="fade-down" data-aos-duration="2000">
      <div className="nav">
        <div className="navImage">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <FaBars className="menuIcon"/>
        </div>
        <div className="navbar">
          <div className="navbarTop">
            <p>{t("navbar.topOrder")}</p>
            <p>
              <FaTelegram className="navTelegramIcon" />
              {t("navbar.telegramLink")}
            </p>
            <div className="navbarTopRight">
              <p>{t("navbar.onlineCall")}</p>
              <h3>
                <LuPhone /> +998987654321
              </h3>
            </div>
          </div>
          <div className="navbarBottom">
            <div className="navbarBottomLinks">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                {t("navbar.home")}
              </NavLink>
              <div className="navbarDropDown">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="katalog"
                >
                  {t("navbar.katalog")} <FaAngleDown />
                </NavLink>
                <div className="dropdownElements">
                  <NavLink to="katalog">
                    {t("navbar.katalog")} 1
                  </NavLink>
                  <NavLink to="katalog">
                    {t("navbar.katalog")} 2
                  </NavLink>
                  <NavLink to="katalog">
                    {t("navbar.katalog")} 3
                  </NavLink>
                  <NavLink to="katalog">
                    {t("navbar.katalog")} 4
                  </NavLink>
                </div>
              </div>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="delivery"
              >
                {t("navbar.delivery")}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="pay"
              >
                {t("navbar.pay")}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="contact"
              >
                {t("navbar.contact")}
              </NavLink>
            </div>
            <div className="languages">
              <div className="language">
                <img src={flag} alt="language" />
                <span>{langText}</span>
                <FaAngleDown className="languageIcon" />
              </div>
              <div className="anotherLanguage">
              <div onClick={() => changeLanguage("kz","Kz")} className="language">
                <img src={flag} alt="language" />
                <span>Kz</span>
              </div>
                <div onClick={() => changeLanguage("ru","Rus")} className="language">
                  <img src={flag} alt="language" />
                  <span>Rus</span>
                </div>
                <div onClick={() => changeLanguage("uz","Uzb")} className="language">
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
// import React, { useState } from "react";
// import "./Navbar.css";
// import { FaAngleDown, FaTelegram } from "react-icons/fa6";
// import { LuPhone } from "react-icons/lu";
// import flag from "../../assets/flag.png";
// import logo from "../../assets/logo.png";
// import { Link, NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [selectedLanguage, setSelectedLanguage] = useState("Kz");

//   const changeLanguage = (lng, langText) => {
//     i18n.changeLanguage(lng);
//     setSelectedLanguage(langText);
//   };

//   return (
//     <nav>
//       <div className="nav">
//         <Link to="/">
//           <img src={logo} alt="logo" />
//         </Link>
//         <div className="navbar">
//           <div className="navbarTop">
//             <p>{t("navbar.topOrder")}</p>
//             <p>
//               <FaTelegram className="navTelegramIcon" />
//               {t("navbar.telegramLink")}
//             </p>
//             <div className="navbarTopRight">
//               <p>{t("navbar.onlineCall")}</p>
//               <h3>
//                 <LuPhone /> +998987654321
//               </h3>
//             </div>
//           </div>
//           <div className="navbarBottom">
//             <div className="navbarBottomLinks">
//               <NavLink
//                 className={({ isActive }) => (isActive ? "active" : "")}
//                 to="/"
//               >
//                 {t("navbar.home")}
//               </NavLink>
//               <div className="navbarDropDown">
//                 <NavLink
//                   className={({ isActive }) => (isActive ? "active" : "")}
//                   to="katalog"
//                 >
//                   {t("navbar.katalog")} <FaAngleDown />
//                 </NavLink>
//                 <div className="dropdownElements">
//                   <NavLink to="katalog">
//                     {t("navbar.katalog")} 1
//                   </NavLink>
//                   <NavLink to="katalog">
//                     {t("navbar.katalog")} 2
//                   </NavLink>
//                   <NavLink to="katalog">
//                     {t("navbar.katalog")} 3
//                   </NavLink>
//                   <NavLink to="katalog">
//                     {t("navbar.katalog")} 4
//                   </NavLink>
//                 </div>
//               </div>
//               <NavLink
//                 className={({ isActive }) => (isActive ? "active" : "")}
//                 to="delivery"
//               >
//                 {t("navbar.delivery")}
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? "active" : "")}
//                 to="pay"
//               >
//                 {t("navbar.pay")}
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? "active" : "")}
//                 to="contact"
//               >
//                 {t("navbar.contact")}
//               </NavLink>
//             </div>
//             <div className="languages">
//               <div
//                 onClick={() => changeLanguage("kz", "Kz")}
//                 className="language"
//               >
//                 <img src={flag} alt="language" />
//                 <span>{selectedLanguage}</span>
//                 <FaAngleDown className="languageIcon" />
//               </div>
//               <div className="anotherLanguage">
//                 <div
//                   onClick={() => changeLanguage("ru", "Rus")}
//                   className="language"
//                 >
//                   <img src={flag} alt="language" />
//                   <span>Rus</span>
//                 </div>
//                 <div
//                   onClick={() => changeLanguage("uz", "Uzb")}
//                   className="language"
//                 >
//                   <img src={flag} alt="language" />
//                   <span>Uzb</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
