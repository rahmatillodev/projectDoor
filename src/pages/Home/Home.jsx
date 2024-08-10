import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import Examples from "../../components/Examples/Examples";
import Testimonial from "../../components/Testimonial/Testimonial";
import Service from "../../components/Service/Service";
import Design from "../../components/Design/Design";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
    <>
      <Header />
      <About />
      <HomeCategory />
      <Examples />
      <Testimonial />
      <Service />
      <Swiper className="designSwiper"
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          duration: 5000,
        }}
        modules={[Navigation, Autoplay]}
      >


        <SwiperSlide>
          <Design />
        </SwiperSlide>
        <SwiperSlide>
          <Design />
        </SwiperSlide>
        <SwiperSlide>
          <Design />
        </SwiperSlide>
        <div className="swiper-button-prev">
          <FaArrowLeftLong />
        </div>
        <div className="swiper-button-next">
          <FaArrowRightLong />
        </div>
      </Swiper>
    </>
  );
};

export default Home;
