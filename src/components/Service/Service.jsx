import "./Service.css"
import img from "../../assets/service.png"
import xIcon from "../../assets/x-octagon.svg"
import form from "../../assets/form.png"
import success from "../../assets/success.svg"
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
        <div className="serviceBottom">
            <h2>Bizning eshiklar bilan yuqoridagi muammolarga duch kelsangiz,
            ma’muriyat <span>harajat</span> va <span>majburiyatlarni</span> o’z zimmasiga oladi</h2>
            <div className="serviceBottomImages">
                <img className="fromImage" src={form} alt="form" />
                <div className="serviceBottomCard">
                    <p>5 yil sifatiga kafolat beramiz</p>
                    <p>1 yil bepul servis ko’rsatamiz</p>
                    <button>Buyurtma berish</button>
                    <p></p>
                </div>
                <img src={success} className="successImage" alt="success" />
            </div>
        </div>
    </div>
  )
}

export default Service