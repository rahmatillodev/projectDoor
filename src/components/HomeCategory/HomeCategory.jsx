import "./HomeCategory.css";
import door from "../../assets/door.png";
import linkRight from "../../assets/linkRight.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
const HomeCategory = () => {
  const [data, setData] = useState([]);
  const [filterCategory, setfilterCategory] = useState("all");
  const [active, setActive] = useState("all")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, [filterCategory]);

  const buttons = Array.from(new Set(data.map((category) => category.category)));
  return (
    <div className="homeCategory">
      <h1>Bizning Mahsulot</h1>
      <div className="homeCategoryButtons">
        <button className={active === "all" ? "active":""} onClick={() => (setfilterCategory("all"), setActive('all'))}>All</button>
        {buttons.map((button) => (
          <button className={active === button ? "active":""} key={button} onClick={() => (setfilterCategory(button), setActive(button))}>
            {button}
          </button>
        ))}
      </div>
      <Swiper
        spaceBetween={30}
        loop={true}
        navigation={true}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          750: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="homeCategorySwipers"
      >
        {data.filter(item => filterCategory === "all" ? item : item.category === filterCategory ? item : "")
        .map((item) => (
            <SwiperSlide key={item.id} className="homeCategorySwiper">
              <div className="homeCategorySwiperImage">
                <img src={item.image} alt="" />
              </div>
              <div className="homeCategorySwiperText">
                <p>{item.category}</p>
                <h2>{item.title}</h2>
                <div className="homeCategorySwiperStar">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <button>Batafsil</button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="homeLinks">
        <p className="homeLink">
          <a href="#">To’liq ko’rish</a> <img src={linkRight} alt="linkRight" />
        </p>
      </div>
    </div>
  );
};

export default HomeCategory;
