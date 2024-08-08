import "./HomeCategory.css";
// import door from "../../assets/door.png";
import linkRight from "../../assets/linkRight.svg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  const [data, setData] = useState([]);
  const [filterCategory, setfilterCategory] = useState("all");

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

  const { t } = useTranslation();

  return (
    <div className="homeCategory">
      <h1>{t("homeCategory.weProduct")}</h1>
      <div className="homeCategoryTop">
      <div className="homeCategoryButtons">
        <button
          className={filterCategory === "all" ? "active" : ""}
          onClick={() => setfilterCategory("all")}
        >
          All
        </button>
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
      <Swiper
        spaceBetween={20}
        parallax={true}
        mousewheel={true}
        loop={data.length > 4 ? true : false}
        modules={[Navigation,Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          850: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className="homeCategorySwipers"
      >
        {data ? data
          .filter((item) =>
            filterCategory === "all"
              ? item
              : item.category === filterCategory
              ? item
              : null
          )
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
          )) : ""}
        <div className="swiper-button-prev">
          <FaArrowLeftLong />
        </div>
        <div className="swiper-button-next" >
          <FaArrowRightLong />
        </div>
      </Swiper>

      <div className="homeLinks">
        <p className="homeLink">
          <Link to="katalog">{t("homeCategory.fullView")}</Link>{" "}
          <img src={linkRight} alt="linkRight" />
        </p>
      </div>
    </div>
  );
};

export default HomeCategory;
