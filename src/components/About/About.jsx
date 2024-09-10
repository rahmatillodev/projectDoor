import { useTranslation } from "react-i18next";
import "./About.css";
const About = () => {
  const [t] = useTranslation("global");

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
        <h1>1000 + </h1>
        <p>{t('about.infinity')}</p>
        </div>
      </div>
    </div>
    <div className="video">
    <iframe src="https://www.youtube.com/embed/2WNZrS0OFrw?si=NqzsVMPO8wY5s9V4" title="YouTube video player" allowFullScreen></iframe>
    </div>
    </>
  );
};

export default About;
