import "./Testimonial.css";
import img from "../../assets/testimonialImg.png";
import image from "../../assets/testimonialImage.png";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong, FaRegStar } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Testimonial = () => {
  const { t } = useTranslation();
  let array = [
    {
      bgImg: image,
      img: img,
      title: "Abror Ahmedov",
      desc: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat maha",
      who: "Shifokor",
    },
    {
      bgImg: image,
      img: img,
      title: "Abror Ahmedov",
      desc: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      who: "Shifokor",
    },
    {
      bgImg: image,
      img: img,
      title: "Abror Ahmedov",
      desc: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      who: "Shifokor",
    },
    {
      bgImg: image,
      img: img,
      title: "Abror Ahmedov",
      desc: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      who: "Shifokor",
    },
    {
      bgImg: image,
      img: img,
      title: "Abror Ahmedov",
      desc: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      who: "Shifokor",
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
              <div className="testimonialCardImage">
                <img src={element.img} alt="Profile Picture" />
              </div>
              <h3>{element.title}</h3>
              <span>{element.who}</span>
              <p>{element.desc}</p>
              <div className="testimonialStars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
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
