import "./Delivery.css";
import car from "../../assets/car.png";
import check from "../../assets/check.svg";
import { useTranslation } from "react-i18next";
const Delivery = () => {
  const [t] = useTranslation("global");

  return (
    <div className="delivery">
      <h1>{t("deliveryPage.delivery")}</h1>
      <div className="deliveryWrapper">
        <div className="deliveryImg">
          <img src={car} alt="" />
        </div>
        <div className="deliveryText">
          <h2>{t("deliveryPage.order")} </h2>
          <ul>
            <li>
              <img src={check} className="deliveryIcon" alt="deliveryIcon" />
              {t("deliveryPage.cars")}
            </li>
            <li>
              <img src={check} className="deliveryIcon" alt="deliveryIcon" />
              {t("deliveryPage.warehouse")}
            </li>
            <li>
              <img src={check} className="deliveryIcon" alt="deliveryIcon" />
              {t("deliveryPage.services")}
            </li>
            <li>
              <img src={check} className="deliveryIcon" alt="deliveryIcon" />
              {t("deliveryPage.time")}
            </li>
          </ul>
        </div>
      </div>
      <h4>{t("deliveryPage.trust")}</h4>
      <h5>{t("deliveryPage.workWithYou")}</h5>
    </div>
  );
};

export default Delivery;
