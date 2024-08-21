import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Card.css";
import { useTranslation } from "react-i18next";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Card = ({ data }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { id } = useParams();
  const [t, i18n] = useTranslation("global");

  const products = data.find((product) => product.id === parseInt(id));
  if (!products) {
    return (
      <div className="detailCard">
        <h1>Product not found</h1>;
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const raw = JSON.stringify({
      full_name: fullName,
      phone: phone,
      email: email,
      address: address,
    });

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };

    fetch("https://admin.f9group.kz/api/form", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setFullName("");
        setPhone("");
        setEmail("");
        setAddress("");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="detailCard">
      <div className="detailCardWrapper">
        <div className="detailCardImage">
          <Zoom>
            <img src={products.photo} alt="" />
          </Zoom>
        </div>
        <div className="detailCardRight">
          <div className="detailCardText">
            <h1>{products[`name_${i18n.language}`]}</h1>
            <p>
              {t("cardPage.category")}
              <span>{products.category[`name_${i18n.language}`]}</span>
            </p>
            <h3>{t("cardPage.form")}</h3>
          </div>
          <form onSubmit={handleSubmit} className="detailCardForm">
            <input
              type="text"
              placeholder={t("cardPage.name")}
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder={t("cardPage.number")}
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder={t("cardPage.email")}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder={t("cardPage.address")}
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              className="button"
              type="submit"
              onClick={() => {
                if (fullName && phone && email && address) {
                  alert("Ma'lumotlar muvaffaqiyatli jo'natildi!");
                }
              }}
            >
              {t("cardPage.ship")}
            </button>
          </form>
          <div className="detailCardDesc">
            <h3>{products[`desc${i18n.language}`]}</h3>
          </div>
        </div>
      </div>
      <h2>{t("cardPage.showroom")}</h2>
      <h5>{t("cardPage.workWithYou")}</h5>
    </div>
  );
};

export default Card;
