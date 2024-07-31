import "./Service.css"
import img from "../../assets/service.png"
import xIcon from "../../assets/x-octagon.svg"
import form from "../../assets/form.png"
import success from "../../assets/success.svg"
import { useTranslation } from "react-i18next"
const Service = () => {
    const {t} = useTranslation()
  return (
    <div className="service">
        <div className="serviceTop">
            <div className="serviceTopImage">
                <img src={img} alt="serviceTopImage" />
            </div>
            <div className="serviceTopText">
                <h2>{t('service.selection')}
                <span> {t('service.selectionRed')}</span> {t('service.possible')} </h2>
                <ul>
                    <li><img src={xIcon} alt="xIcon" /> <span>{t('service.time')}</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>{t('service.fails')} </span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>{t('service.deadline')}</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>{t("service.home")} </span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>{t("service.loss")}</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>{t("service.cold")}</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>{t("service.colorNot")}</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>{t('service.waterDoor')}</span></li>
                </ul>
            </div>
        </div>
        <div className="serviceBottom">
            <h2> {t('service.problemDoor')}
            {t('service.administration')} <span> {t('service.cost')} </span> {t('service.and')} <span> {t('service.obligations')} </span> {t('service.undertakes')}</h2>
            <div className="serviceBottomImages">
                <img className="fromImage" src={form} alt="form" />
                <div className="serviceBottomCard">
                    <p>{t('service.guarantee')}</p>
                    <p>{t('service.freeService')}</p>
                    <button>{t('service.order')}</button>
                    <p></p>
                </div>
                <img src={success} className="successImage" alt="success" />
            </div>
        </div>
    </div>
  )
}

export default Service