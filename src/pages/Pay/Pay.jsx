import { useTranslation } from "react-i18next"
import "./Pay.css"

const Pay = () => {
  const [t] = useTranslation("global");
  return (
    <div className='pay'>
      <h1>{t("payPage.pay")}</h1>
      <div className="payCards">
        <div className="payCard"></div>
        <div className="payCard"></div>
        <div className="payCard"></div>
      </div>
    </div>
  )
}

export default Pay