import "./Service.css"
import img from "../../assets/service.png"
import xIcon from "../../assets/x-octagon.svg"
const Service = () => {
  return (
    <div className="service">
        <div className="serviceTop">
            <div className="serviceTopImage">
                <img src={img} alt="serviceTopImage" />
            </div>
            <div className="serviceTopText">
                <h2>Tanlovda adashsangiz quyidagi
                <span> muammolarga</span> duch kelishingiz mumkin </h2>
                <ul>
                    <li><img src={xIcon} alt="xIcon" /> <span>Asablaringiz va qimmatli vaqtingizdan ayrilishingiz</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>Furnitura tez sinib ketishi, ishdan chiqishi</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>Eshik muddatdan kechiktirib berilishi</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>Uyingiz intereriga mos tushmay qolishi yoki yo'qligi</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>Qiynalib topgan mablag'ingizni yo'qotishingiz</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>Qish kunlarida o'zidan sovuq shamol o'tkazishi</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>Tezda rangi o'chib, sarg'ayib ketishi</span></li>
                    <li><img src={xIcon} alt="xIcon" /> <span>Eshikka suv tegsa, shishib ketishi yoki yorilishi</span></li>
                </ul>
            </div>
        </div>
        <div className="serviceBottom"></div>
    </div>
  )
}

export default Service