import "./Katalog.css";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa6";
const Katalog = ({data,buttons , filterCategory , setfilterCategory,firstFilter}) => { 
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
            {data.filter(item =>filterCategory === "" ? item : item.category === filterCategory ? item : '' ).map((item) => (
              <div className="katalogCard" key={item.id}>
                <div className="katalogCardImage">
                  <img src={item.image} alt="" />
                </div>
                <div className="katalogCardText">
                  <span>{firstFilter}</span>
                  <p>{item.category}</p>
                  <h2>{item.title}</h2>
                  <div className="katalogStars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  </div>
                  <Link to={`/catalog/${item.id}`}>
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
