import "./Design.css";
import dots from "../../assets/dots.png";
import { useTranslation } from "react-i18next";
const Design = () => {
  const [t] = useTranslation("global");

  return (
    <div className="design">
      <h1>{t("design.advantage")}</h1>
      <span>{t("design.control")}</span>
      <div className="designImage" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
        <div className="designCard designCard2">
          <div className="number">2</div>
          <div>
            <h2>{t("design.stage")}</h2>
            <p>{t("design.response")}</p>
          </div>
        </div>

        <div className="designCard designCard1">
          <div className="number">1</div>
          <div>
            <h2>{t("design.stage")}</h2>
            <p>{t("design.response")}</p>
          </div>
        </div>

        <div className="designCard designCard3">
          <div className="number">3</div>
          <div>
            <h2>{t("design.stage")}</h2>
            <p>{t("design.response")}</p>
          </div>
        </div>
      </div>
      <img src={dots} alt="dots" className="dots" />
    </div>
  );
};

export default Design;
