import "./Katalog.css";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Katalog = ({ data }) => {
  const [filterCategory, setfilterCategory] = useState("классикалык");
  const [t, i18n] = useTranslation("global");
  const buttons = Array.from(
    new Set(data.map((item) => item.category[`name_${i18n.language}`]))
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filterCategory && buttons.length > 1) {
      setFilter(filterCategory);
    } else  if (filterCategory && buttons.length === 1) {
      setFilter(buttons[0]);
    } 
  }, [filterCategory, buttons]);

  const handleFilterChange = (button) => {
    setFilter(button);
    setfilterCategory(button);
  };
  console.log(filterCategory);


  if (buttons === 0) {
      return <div className="katalog"><h1 className="not">Mahsulot yo'q</h1></div>
    
  }

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
                  className={filter === button ? "active" : ""}
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
                filter ? item.category[`name_${i18n.language}`] === filter : true
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

// .filter((item) =>
//   filterCategory === ""
//     ? item
//     : item.category[`name_${i18n.language}`].toLowerCase() === filterCategory
//     ? item
//     : ""
// )
