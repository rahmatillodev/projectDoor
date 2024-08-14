import "./HomeCategory.css";
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
  const [t,i18n] = useTranslation("global");


  const [data, setData] = useState([]);
  const [filterCategory, setfilterCategory] = useState("all");

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch("https://onemed.uz/api/products?category__parent", requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error));
  }, [])

  console.log(data);

  return (
    <div className="homeCategory">
      <h1>{t("homeCategory.weProduct")}</h1>
      <div className="homeCategoryTop">
        <div className="homeCategoryButtons">
          <button className={filterCategory === "all" ? "active" : ""} onClick={() => setfilterCategory("all")}> {t("homeCategory.all")}</button>
          <button className={filterCategory === "door" ? "active" : ""} onClick={() => setfilterCategory("door")}> {t('homeCategory.door')}</button>
          <button className={filterCategory === "chair" ? "active" : ""} onClick={() => setfilterCategory("chair")}> {t('homeCategory.chair')}</button>
          <button className={filterCategory === "pot" ? "active" : ""} onClick={() => setfilterCategory("pot")}> {t('homeCategory.pot')}</button>
          <button className={filterCategory === "stairs" ? "active" : ""} onClick={() => setfilterCategory("stairs")}> {t('homeCategory.stairs')}</button>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        parallax={true}
        mousewheel={true}
        loop={data.length > 4 ? true : false}
        modules={[Navigation, Autoplay]}
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
        {data.length > 0
          ? data
            .filter((item) => filterCategory === "all" ? item : item.category === filterCategory ? item : null)
            .map((item) => (
              <SwiperSlide key={item.id} className="homeCategorySwiper">
                <div className="homeCategorySwiperImage">
                  <img src={item.photo} alt="" />
                </div>
                <div className="homeCategorySwiperText">
                  <p>{item.category[`name_${i18n.language}`]}</p>
                  <h2>{item[`name_${i18n.language}`]}</h2>
                  <div className="homeCategorySwiperStar">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <Link to={`/catalog/${item.id}`}>Batafsil</Link>
                </div>
              </SwiperSlide>
            ))
          : <p>Loading...</p>}
        <div className="swiper-button-prev">
          <FaArrowLeftLong />
        </div>
        <div className="swiper-button-next">
          <FaArrowRightLong />
        </div>
      </Swiper>

      <div className="homeLinks">
        <p className="homeLink">
          <Link to="katalog">{t("homeCategory.fullView")}</Link>
          <img src={linkRight} alt="linkRight" />
        </p>
      </div>
    </div>
  );
};

export default HomeCategory;
