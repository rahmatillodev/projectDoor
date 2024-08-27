import { useTranslation } from "react-i18next"
import "./Pay.css"
import money from "../../assets/naqt.webp"
import click from "../../assets/click.jpg"
import payme from "../../assets/payme.jpg"
const Pay = () => {
  const [t] = useTranslation("global");
  return (
    <div className='pay'>
      <h1>{t("payPage.pay")}</h1>
      <div className="payCards">
        <div className="payCard">
          <img src={money} alt="money" />
        </div>
        <div className="payCard">
          <img src={click} alt="click" />
        </div>
        <div className="payCard">
          <img src={payme} alt="payme" />
        </div>
      </div>
    </div>
  )
}

export default Pay