import { useEffect, useState } from "react";
import "./Katalog.css";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa6";
const Katalog = () => {
  const [data, setData] = useState([]);
  const [filterCategory, setfilterCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [filterCategory]);
  const buttons = Array.from(
    new Set(data.map((category) => category.category))
  );
  return (
    <>
      {data ? (
        <div className="katalog">
          <div className="katalogButtons">
            <div className="katalogButton">

          {buttons.map((button) => (
            <button
            className={filterCategory === button ? "active" : ""}
            key={button}
            onClick={() => setfilterCategory(button)}
            >
              {button}
            </button>
          ))}
          </div>
          </div>
          <div className="katalogCards">
            {data.filter(item => item.category === filterCategory ? item : '' ).map((item) => (
              <div className="katalogCard">
                <div className="katalogCardImage">
                  <img src={item.image} alt="" />
                </div>
                <div className="katalogCardText">
                  <p>{item.category}</p>
                  <h2>{item.title}</h2>
                  <div className="katalogStars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  </div>
                  <Link to="/">
                    <button>Batafsil</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default Katalog;
