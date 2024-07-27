import "./Delivery.css";
import car from "../../assets/car.png";
import check from "../../assets/check.svg";
const Delivery = () => {
  return (
    <div className="delivery">
      <h1>Yetkazib berish va o’rnatish</h1>
      <div className="deliveryWrapper">
        <div className="deliveryImg">
          <img src={car} alt="" />
        </div>
        <div className="deliveryText">
          <h2>
            Biz kompayniya mijozlariga g’amxo’rlik qilamiz. Bizning eshiklar
            qulay va juda oson ichki eshiklarimizga buyurtma bering
          </h2>
          <ul>
            <li>
              <img src={check} className="deliveryIcon" alt="deliveryIcon" />
              Eshiklarni etkazib berish maxsus jihozlangan transport vositasida
              amalga oshiriladi
            </li>
            <li>
              
              <img src={check} className="deliveryIcon" alt="deliveryIcon" />
              Shuningdek, siz funktsiyadan foydalanishingiz mumkin: "ombordan
              olib ketish".
            </li>
            <li>
              <img src={check} className="deliveryIcon" alt="deliveryIcon" />
              Qulfni yoki mandalni o'rnatish, menteşalarni osib qo'yish,
              tutqichlarni mahkamlash. Eshik ramkasini yig'ish va o'rnatish;
            </li>
            <li>
              <img src={check} className="deliveryIcon" alt="deliveryIcon" />
              Sizga qulay bo'lgan har qanday vaqtda tezkor etkazib berishni
              kafolatlaymiz!
            </li>
          </ul>
        </div>
      </div>
      <h4>Shourumimizga kelib, so’zlarimizga ishonch hosil qilish!</h4>
      <h5>Siz bilan ishlashdan minnatdor bo’lamiz.</h5>
    </div>
  );
};

export default Delivery;
