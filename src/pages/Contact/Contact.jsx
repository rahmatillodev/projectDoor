import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const {t} = useTranslation()
  return (
    <div className="contact">
      <h1>{t("contactPage.contact")}</h1>
      <div className="contactWrapper">
        <div className="contactLeft">
          <h2>
            <span>{t("contactPage.f9")}</span> {t("contactPage.f9Group")}
          </h2>
          <div className="contactLeftText">
            <div>
              <div>
                <p>{t("contactPage.workTime")}</p>
                <h3>{t("contactPage.workHour")}</h3>
              </div>
              <div>
                <p>{t("contactPage.phone")}</p>
                <h3>+998 71 230-12-91</h3>
              </div>
              <div>
                <p>{t("contactPage.email")}</p>
                <h3>f9group@gmail.uz</h3>
              </div>
            </div>
            <div>
              <div>
                <p>{t("contactPage.car")}</p>
                <h3>{t("contactPage.busRoute")}</h3>
              </div>
              <div>
                <p>{t("contactPage.address")}</p>
                <h3>{t("contactPage.addressLocation")}</h3>
              </div>
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
