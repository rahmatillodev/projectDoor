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
import { useTranslation } from "react-i18next";
const Katalog = ({ data, buttons, filterCategory, setfilterCategory }) => {
  const [t,i18n] = useTranslation("global");


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
                <p>{item.category.parent}</p>
                  {/* <p>{item.category[`name_${i18n.language}`]}</p> */}
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

