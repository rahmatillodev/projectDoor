import "./Header.css";
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t} = useTranslation()
  return (
    <header>
      <div className="header">
        <div className="headerLeft">
          <div className="headerLeftTitle">
            <h1>
            {t('header.headerLeftText1')}
              <p>
                <span> {t('header.headerLeftText2')}</span> {t('header.headerLeftText3')}
              </p>
            </h1>
          </div>
          <p className="headerLeftText">
            <img src={icon1} className="headerLeftIcon" alt="icon1" />
            <span>{t('header.headerLeftText4')}</span>
          </p>
          <p className="headerLeftText">
          <img src={icon2} className="headerLeftIcon" alt="icon2" />
          <span>{t('header.headerLeftText5')}</span>
          </p>
          <p className="headerLeftText">
          <img src={icon3} className="headerLeftIcon" alt="icon3" />
          <span>{t('header.headerLeftText6')}</span>
          </p>
        </div>
        <div className="headerRight">
          <div className="headerRightForm">
            <h1>{t('header.headerRightText1')}</h1>
            <p>{t('header.headerRightText2')}</p>
            <input type="text" className="headerRightName" placeholder={t('header.headerRightInput4')} />
            <input type="text" className="headerRightNumber" placeholder={t('header.headerRightInput5')} />
            <button className="btn">{t('header.headerRightText3')}</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
