import { useTranslation } from "react-i18next";
import "./About.css";
import { FaInfinity } from "react-icons/fa6";
const About = () => {
  const {t} = useTranslation()
  return (
    <>
    <div className="about">
      <div className="aboutText">
        <div data-aos="fade-up" data-aos-duration="300">
        <h1>{t('about.year')}</h1>
        <p>{t('about.specialists')}</p>
        </div>
      </div>
      <div className="aboutText">
        <div data-aos="fade-up" data-aos-duration="600">
        <h1>{t('about.projectNumber')}</h1>
        <p>{t('about.project')}</p>
        </div>
      </div>
      <div className="aboutText">
        <div  data-aos="fade-up" data-aos-duration="900">
        <h1>{t('about.productNumber')}</h1>
        <p>{t('about.product')}</p>
        </div>
      </div>
      <div className="aboutText">
        <div  data-aos="fade-up" data-aos-duration="1200" >
        <h1><FaInfinity /> </h1>
        <p>{t('about.infinity')}</p>
        </div>
      </div>
    </div>
    <div className="video">
    <iframe src="https://www.youtube.com/embed/rlhb4BHF6x8?si=PBneN6gqJQkppX2p&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </>
  );
};

export default About;
