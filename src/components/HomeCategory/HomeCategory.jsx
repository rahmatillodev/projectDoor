import "./HomeCategory.css";
import door from "../../assets/door.png";
import linkRight from "../../assets/linkRight.svg"
import { FaArrowRightLong } from "react-icons/fa6"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
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
  const [resizeWidth, setresizeWidth] = useState(4);

  function width() {
    window.innerWidth > 1260
      ? setresizeWidth(4)
      : window.innerWidth > 935
      ? setresizeWidth(3)
      : window.innerWidth > 600
      ? setresizeWidth(2)
      : setresizeWidth(1);
  }
  window.addEventListener("resize", width);
  useEffect(() => {
    width();
  }, []);

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
        slidesPerView={resizeWidth}
        spaceBetween={50}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="homeCategorySwipers"
      >
        {array.map((item) => (
          <SwiperSlide key={item.id} className="homeCategorySwiper">
            <div className="homeCategorySwiperImage">
              <img src={item.img} alt="" />
            </div>
            <div className="homeCategorySwiperText">
              <p>{item.desc}</p>
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
        <p className="homeLink"><a href="#" >To’liq ko’rish</a> <img src={linkRight} alt="linkRight" /></p>
      </div>
    </div>
  );
};

export default HomeCategory;
