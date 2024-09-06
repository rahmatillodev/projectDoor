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
              <h3>+77009000909</h3>
            </div>
            <div>
              <img src={email} alt="email" />
              <h3>f9group@gmail.uz</h3>
            </div>
            <div>
              <img src={map} alt="map" />
              {/* <h3>{t("contactPage.addressLocation")}</h3> */}
              <h3>Unnamed Road, Аксукент, Казахстан</h3>
            </div>
          </div>
        </div>
        <div className="contactRight">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.6300728670158!2d69.8975696!3d42.393026400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a8ef2d38e1382b%3A0xd9bd4b17da37e3a3!2sF9%20GROUP!5e0!3m2!1suz!2s!4v1725625057024!5m2!1suz!2s"
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
