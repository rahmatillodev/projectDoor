import "./Header.css";
import { FaRulerCombined } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="headerLeft">
          <div className="headerLeftTitle">
            <h1>
              premium sifatdagi
              <p>
                <span> mdf</span> Eshiklar
              </p>
            </h1>
          </div>
          <p className="headerLeftText">
            <img src={icon1} className="headerLeftIcon" alt="icon1" />
            <span>To’g’ridan to’g’ri ishlab chiqaruvchidan</span>
          </p>
          <p className="headerLeftText">
          <img src={icon2} className="headerLeftIcon" alt="icon2" />
          <span>1 yil bepul serviz ko’rsatamiz</span>
          </p>
          <p className="headerLeftText">
          <img src={icon3} className="headerLeftIcon" alt="icon3" />
          <span>Sifatga 5 yillik kafolat beramiz</span>
          </p>
        </div>
        <div className="headerRight">
          <div className="headerRightForm">
            <h1>O'lchovini bepul chiqarish uchun</h1>
            <p>Buyurtma uchun quyidagi 
            formani to’ldiring</p>
            <input type="text" className="headerRightName" placeholder="Ismingiz" />
            <input type="text" className="headerRightNumber" placeholder="+998" />
            <button className="btn">Jo'natish</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
