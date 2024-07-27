import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Bog’lanish</h1>
      <div className="contactWrapper">
        <div className="contactLeft">
          <h2>
            <span>F9</span> group agentligi
          </h2>
          <div className="contactLeftText">
            <div>
              <p>Ish vaqti</p>
              <h3>Dushanbadan-shanbagacha 09:00 dan 18:00 gacha</h3>
              <p>Telefon:</p>
              <h3>+998 71 230-12-91</h3>
              <p>E-mail:</p>
              <h3>f9group@gmail.uz</h3>
            </div>
            <div>
              <p>Transport:</p>
              <h3>131-avtobus, 13-yo`nalishli taksi.</h3>
              <p>Manzil:</p>
              <h3>
                Toshkent shahri, Kichik Xalqa Yo`li ko`chasi, G-9a mavzesi, 21-a
                uy.
              </h3>
            </div>
          </div>
        </div>
        <div className="contactRight">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.126225874139!2d69.28103428287966!3d41.29062762173365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1cea5722a7%3A0x5c72e0166ca42a43!2sKichik%20Xalqa%20Yo&#39;li%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1722074001391!5m2!1suz!2s"
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
