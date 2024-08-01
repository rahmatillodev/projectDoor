import "./Header.css";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header">
        <div className="headerLeft" data-aos="fade-right">
          <div className="headerLeftTitle">
            <h1>
              {t("header.quality")}
              <p>
                <span> {t("header.mdf")}</span> {t("header.doors")}
              </p>
            </h1>
          </div>
          <p className="headerLeftText">
            <img src={icon1} className="headerLeftIcon" alt="icon1" />
            <span>{t("header.StraightAway")}</span>
          </p>
          <p className="headerLeftText">
            <img src={icon2} className="headerLeftIcon" alt="icon2" />
            <span>{t("header.service")}</span>
          </p>
          <p className="headerLeftText">
            <img src={icon3} className="headerLeftIcon" alt="icon3" />
            <span>{t("header.guarantee")}</span>
          </p>
        </div>
        <div className="headerRight">
          <div className="headerRightForm" data-aos="fade-left">
            <h1>{t("header.free")}</h1>
            <p>{t("header.fill")}</p>
            <input
              type="text"
              className="headerRightName"
              placeholder={t("header.inputName")}
            />
            <input
              type="text"
              className="headerRightNumber"
              placeholder={t("header.inputNumber")}
            />
            <button className="btn">{t("header.dispatch")}</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
