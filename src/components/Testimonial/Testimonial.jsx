import "./Testimonial.css";
import img from "../../assets/testimonialImg.png";
import image1 from "../../assets/testimonialBg1.jpg";
import image2 from "../../assets/testimonialBg2.jpg";
import image3 from "../../assets/testimonialBg3.jpg";
import image4 from "../../assets/testimonialBg4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong, FaRegStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Testimonial = () => {
  const [t] = useTranslation("global");

  let array = [
    {
      bgImg: image1,
      img: img,
      title: "Alixan",
      desc: t('testimonial.descFirst'),
    },
    {
      bgImg: image2,
      img: img,
      title: "Arsen",
      desc: t('testimonial.descSecond'),
    },
    {
      bgImg: image3,
      img: img,
      title: "Ramazon",
      desc: t('testimonial.descThird'),
    },
    {
      bgImg: image4,
      img: img,
      title: "Ayzada",
      desc: t('testimonial.descFour'),
    },
   
  ];
  return (
    <div className="testimonial">
      <p>{t("testimonial.testimonialTitle")}</p>
      <h1>{t("testimonial.testimonialDesc")}</h1>
      <Swiper
        spaceBetween={30}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="testimonialCards"
      >
        {array.map((element, index) => (
          <SwiperSlide
            key={index}
            className="testimonialCard"
            style={{ background: `center/cover url(${element.bgImg})` }}
          >
            <div className="testimonialCardText">
              {/* <div className="testimonialCardImage">
                <img src={element.img} alt="Profile" />
              </div> */}
              <h3>{element.title}</h3>
              <p>{element.desc}</p>
              <div className="testimonialStars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev">
          <FaArrowLeftLong />
        </div>
        <div className="swiper-button-next">
          <FaArrowRightLong />
        </div>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
