import "./Design.css";
import dots from "../../assets/dots.png";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Design = () => {
  const [t] = useTranslation("global");

  return (
    <div className="design">
      <h1>{t("design.advantage")}</h1>
      <span>{t("design.control")}</span>
      <Swiper
        className="designSwiper"
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
          <div
            className="designImage"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            <div className="designCard designCard2">
              <div className="number">2</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>

            <div className="designCard designCard1">
              <div className="number">1</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>

            <div className="designCard designCard3">
              <div className="number">3</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="designImage"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            <div className="designCard designCard2">
              <div className="number">2</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>

            <div className="designCard designCard1">
              <div className="number">1</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>

            <div className="designCard designCard3">
              <div className="number">3</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="designImage"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            <div className="designCard designCard2">
              <div className="number">2</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>

            <div className="designCard designCard1">
              <div className="number">1</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>

            <div className="designCard designCard3">
              <div className="number">3</div>
              <div>
                <h2>{t("design.stage")}</h2>
                <p>{t("design.response")}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-button-prev">
          <FaArrowLeftLong />
        </div>
        <div className="swiper-button-next">
          <FaArrowRightLong />
        </div>
      </Swiper>
      <img src={dots} alt="dots" className="dots" />
    </div>
  );
};

export default Design;
