import "./Footer.css";
import logo from "../../assets/logo.svg";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer>
      <div className="footer">
        <div>
          <img src={logo} alt="logo" />
          <p>{t("footer.aboutProduct")}</p>
        </div>
        <div>
          <Link to="/">{t("footer.home")}</Link>
          <Link to="/delivery">{t("footer.delivery")}</Link>
          <Link to="/pay">{t("footer.pay")}</Link>
          <Link to="/contact">{t("footer.contactus")}</Link>
        </div>
        <div>
          <a href="">{t("footer.katalog")}</a>
          <a href="">{t("footer.doors")}</a>
          <a href="">{t("footer.tables")}</a>
          <a href="">{t("footer.stairs")}</a>
          <a href="">{t("footer.cauldrons")}</a>
        </div>
        <div>
          <a href="">{t("footer.media")}</a>
          <a href="">
            <FaFacebook /> {t("footer.facebook")}
          </a>
          <a href="">
            <BsTwitter /> {t("footer.twitter")}
          </a>
          <a href="https://www.instagram.com/f9.kaz/" target="_blank">
            <BsInstagram /> {t("footer.instagram")}
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <p>{t("footer.copyright")}</p>
        <div className="footerBottomRight">
          <p>{t("footer.terms")}</p>
          <p>{t("footer.privacy")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
