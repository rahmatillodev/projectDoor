import { useTranslation } from "react-i18next"
import "./Pay.css"

const Pay = () => {
  const [t] = useTranslation("global");
  return (
    <div className='pay'>
      <h1>{t("payPage.pay")}</h1>
      <div className="payCards">
        <div className="payCard">naqt</div>
        <div className="payCard">click</div>
        <div className="payCard">payme</div>
      </div>
    </div>
  )
}

export default Pay