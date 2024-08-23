import "./Katalog.css";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Katalog = ({ data, firstFilter }) => {

  const [t, i18n] = useTranslation("global");
  const buttons = Array.from(
    new Set(data.map((item) => item.category[`name_${i18n.language}`]))
  );
  const [filterCategory, setfilterCategory] = useState(buttons[0]);


  useEffect(() => {
    setfilterCategory(buttons[0]);
  }, [firstFilter]);

  const handleFilterChange = (button) => {
    setfilterCategory(button);
  };

  return (
    <>
      {data && (
        <div className="katalog">
          <h1>{t("katalogPage.weProduct")}</h1>
          <div className="katalogButtons">
            <div className="katalogButton">
              {buttons.map((button) => (
                <button
                  key={button}
                  className={filterCategory === button ? "active" : ""}
                  onClick={() => handleFilterChange(button)}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
          <div className="katalogCards">
            {data
              .filter((item) =>
                filterCategory ? item.category[`name_${i18n.language}`] === filterCategory : true
              )
              .map((item) => (
                <div className="katalogCard" key={item.id}>
                  <div className="katalogCardImage">
                    <img src={item.photo} alt="" />
                  </div>
                  <div className="katalogCardText">
                    <p>{item.category[`name_${i18n.language}`]}</p>
                    <h2>{item[`name_${i18n.language}`]}</h2>
                    <div className="katalogStars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <Link to={`/catalog/${item.id}`}>
                      <button className="button">{t("katalogPage.read")}</button>
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
