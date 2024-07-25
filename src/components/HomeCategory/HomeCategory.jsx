import "./HomeCategory.css";
import door from "../../assets/door.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Autoplay } from "swiper/modules";
import { FaStar ,FaRegStar } from "react-icons/fa";
const HomeCategory = () => {
  const array = [
    {
      id: 0,
      img: door,
      desc: "Eshik",
      title: "Eshik kilassik",
      star: 5,
    },
    {
      id: 1,
      img: door,
      desc: "Eshik",
      title: "Eshik kilassik",
      star: 5,
    },
    {
      id: 2,
      img: door,
      desc: "Eshik",
      title: "Eshik kilassik",
      star: 5,
    },
    {
      id: 3,
      img: door,
      desc: "Eshik",
      title: "Eshik kilassik",
      star: 5,
    },
    {
      id: 4,
      img: door,
      desc: "Eshik",
      title: "Eshik kilassik",
      star: 5,
    },
    {
      id: 5,
      img: door,
      desc: "Eshik",
      title: "Eshik kilassik",
      star: 5,
    },
  ];
  console.log();
  return (
    <div className="homeCategory">
      <h1>Bizning Mahsulot</h1>
      <div className="homeCategoryButtons">
        <button>Eshik</button>
        <button>Stol stul</button>
        <button>Qozon</button>
        <button>Zinapoya</button>
      </div>
      <Swiper
        slidesPerView={window.innerWidth > 1000 ? 4 : 2}
        spaceBetween={50}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay ,Navigation]}
        className="homeCategorySwipers"
      >
        {array.map((item) => (
          <SwiperSlide className="homeCategorySwiper">
            <div className="homeCategorySwiperImage">
              <img src={item.img} alt="" />
            </div>
            <div className="homeCategorySwiperText">
                <p>{item.desc}</p>
                <h2>{item.title}</h2>
                <div className="homeCategorySwiperStar">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar/>
                <FaRegStar/>
                </div>
                <button>Batafsil</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategory;
