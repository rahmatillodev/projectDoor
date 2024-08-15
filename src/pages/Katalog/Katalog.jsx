
import "./Katalog.css";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Katalog = ({ data, filterCategory, setfilterCategory }) => {
  const [t, i18n] = useTranslation("global");



  return (
    <>
      {data && (
        <div className="katalog">
          <h1>{t('katalogPage.weProduct')}</h1>
          <div className="katalogButtons">
            <div className="katalogButton">
              <button className={filterCategory === "klassik" ? "active" : ""} onClick={() => setfilterCategory("klassik")} >{t('katalogPage.classic')}</button>
              <button className={filterCategory === "hitech" ? "active" : ""} onClick={() => setfilterCategory("hitech")} >{t('katalogPage.hitech')}</button>
              <button className={filterCategory === "luxury" ? "active" : ""} onClick={() => setfilterCategory("luxury")} >{t('katalogPage.luxury')}</button>
              <button className={filterCategory === "premium" ? "active" : ""} onClick={() => setfilterCategory("premium")} >{t('katalogPage.premium')}</button>
            </div>
          </div>
          <div className="katalogCards">
            {data.filter(item => filterCategory === "" ? item : item.category.name_uz.toLowerCase() === filterCategory ? item : '').map((item) => (
              <div className="katalogCard" key={item.id}>
                <div className="katalogCardImage">
                  <img src={item.photo} alt="" />
                </div>
                <div className="katalogCardText">
                  <p>{item.category.parent}</p>
                  <h2>{item[`name_${i18n.language}`]}</h2>
                  <div className="katalogStars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <Link to={`/catalog/${item.id}`}>
                    <button>{t('katalogPage.read')}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Katalog;

