import { useTranslation } from "react-i18next"
import "./Pay.css"
import pay1 from "../../assets/pay1.jpg"
import pay2 from "../../assets/pay2.png"
import payme from "../../assets/otkazma.png"
const Pay = () => {
  const [t] = useTranslation("global");
  return (
    <div className='pay'>
      <h1>{t("payPage.pay")}</h1>
      <div className="payCards">
        <div className="payCard">
          <img src={pay1} alt="money" />
        </div>
        <div className="payCard">
          <img src={pay2} alt="pay2" />
        </div>
        <div className="payCard payCard3">
          <img src={payme} alt="payme" />
          <h5>{t('payPage.desc')}</h5>
        </div>
      </div>
    </div>
  )
}

export default Pay