import { useTranslation } from "react-i18next";
import "./About.css";
import { FaInfinity } from "react-icons/fa6";
const About = () => {
  const {t} = useTranslation()
  return (
    <div className="about">
      <div className="aboutText">
        <h1>{t('about.year')}</h1>
        <p>{t('about.specialists')}</p>
      </div>
      <div className="aboutText">
        <h1>{t('about.projectNumber')}</h1>
        <p>{t('about.project')}</p>
      </div>
      <div className="aboutText">
        <h1>{t('about.productNumber')}</h1>
        <p>{t('about.product')}</p>
      </div>
      <div className="aboutText">
        <h1><FaInfinity /> </h1>
        <p>{t('about.infinity')}</p>
      </div>
    </div>
  );
};

export default About;
