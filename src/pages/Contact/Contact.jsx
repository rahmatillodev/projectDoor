import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import clock from "../../assets/Clock-2.png";
import call from "../../assets/Call.png";
import email from "../../assets/Email.png";
import map from "../../assets/MapPinLine.png";
const Contact = () => {
  const [t] = useTranslation("global");

  return (
    <div className="contact">
      <h1>{t("contactPage.contact")}</h1>
      <div className="contactWrapper">
        <div className="contactLeft">
          <div className="contactLeftText">
            <div>
              <img src={clock} alt="clock" />
              <h3>{t("contactPage.workHour")}</h3>
            </div>
            <div>
              <img src={call} alt="call" />
              <h3>+998 71 230-12-91</h3>
            </div>
            <div>
              <img src={email} alt="email" />
              <h3>f9group@gmail.uz</h3>
            </div>
            <div>
              <img src={map} alt="map" />
              <h3>{t("contactPage.addressLocation")}</h3>
            </div>
          </div>
        </div>
        <div className="contactRight">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.126225874139!2d69.28103428287966!3d41.29062762173365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1cea5722a7%3A0x5c72e0166ca42a43!2sKichik%20Xalqa%20Yo&#39;li%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1722074001391!5m2!1suz!2s"
            title="Contact Form"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
