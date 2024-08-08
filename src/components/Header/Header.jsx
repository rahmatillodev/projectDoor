import "./Header.css";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useState } from "react";
import ModalMenu from "../Modal/Modal";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const { t } = useTranslation();
  return (
    <header>
      <div className="header">
        <div className="headerLeft" data-aos="fade-right">
          <div className="headerLeftTitle">
            <h3>Decorate Home</h3>
            <h1>
              <i>
              {t("header.quality")}
              <p>
                <span> {t("header.mdf")}</span> {t("header.doors")}
              </p>
              </i>
            </h1>
          </div>
          <p className="headerLeftText">
            <img src={icon1} className="headerLeftIcon" alt="icon1" />
            <span>{t("header.StraightAway")}</span>
          </p>
          <p className="headerLeftText">
            <img src={icon2} className="headerLeftIcon" alt="icon2" />
            <span>{t("header.service")}</span>
          </p>
          <p className="headerLeftText">
            <img src={icon3} className="headerLeftIcon" alt="icon3" />
            <span>{t("header.guarantee")}</span>
          </p>
          <button onClick={handleShow} className="button">{t('Buyurtma Berish')}</button>
          <ModalMenu handleShow={handleShow} setShow={setShow} show={show} />

        </div>
        <div className="headerRight">
          <Swiper className="headerCarousel"
           effect={'fade'}
           loop={true}
           autoplay={{
            duration:3000
           }}
           modules={[EffectFade,Autoplay]}
          >
            <SwiperSlide><img src="https://picsum.photos/id/684/600/400" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/id/466/600/400" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/id/543/600/400" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/id/443/600/400" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/id/997/600/400" alt="" /></SwiperSlide>
          
          </Swiper>
        </div>
      </div>
    </header>
  );
};

export default Header;
