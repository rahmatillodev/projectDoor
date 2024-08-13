// const Katalog = ({
//   data,
//   buttons,
//   filterCategory,
//   setfilterCategory,
//   firstFilter,
// }) => {
//   console.log(data);

//   return (
//     <>

//         <div className="katalogCards">
//           {/* .filter(item =>filterCategory === "" ? item : item.category === filterCategory ? item : '' ) */}
//           {data.map((item) => (
//             <div className="katalogCard">
//               <div className="katalogCardImage">
//                 <img src={item.photo} alt="" />
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//       }
//     </>
//   );
// };

// export default Katalog;


import "./Katalog.css";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Katalog = ({ data, buttons, filterCategory, setfilterCategory }) => {
  const { t} = useTranslation();

 

  console.log(data);
  return (
    <>
      {data && (
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
            {data.map((item) => (
              <div className="katalogCard" key={item.id}>
                <div className="katalogCardImage">
                  <img src={item.photo} alt="" />
                </div>
                <div className="katalogCardText">
                  {/* <span>{firstFilter}</span> */}
                  {/* <p>{item.category}</p> */}
                  <h2>{t(item.name_uz)}</h2>
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
      )}
    </>
  );
};

export default Katalog;

