import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Card.css"
import { useTranslation } from "react-i18next";

const Card = ({ data }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const { id } = useParams();
  const [t,i18n] = useTranslation("global");

  const products = data.find((product) => product.id === parseInt(id));
  if (!products) {
    return <p>Product not found</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const raw = JSON.stringify({
      full_name: fullName,
      phone: phone,
      email: email,
      address: address
    });

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: raw,
      redirect: 'follow'
    };
  
    fetch("https://onemed.uz/api/form", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setFullName("");
        setPhone("");
        setEmail("");
        setAddress("");
      })
      .catch(error => console.log('error', error));
  };

  return (
    <div className="detailCard">
      <div className="detailCardWrapper">
        <div className="detailCardImage">
          <img src={products.photo} alt="" />
        </div>
       <div className="detailCardRight">
       <div className="detailCardText">
          <h1>{products[`name_${i18n.language}`]}</h1>
          <p>
            Kategoriya: <span>{products.category[`name_${i18n.language}`]}</span>
          </p>
          <h3>
            Quyidagi formani to'ldiring. Tez orada siz bilan menejerlarimiz
            bog'lanib, batafsil ma'lumot berishadi...
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="detailCardForm">
          <input 
            type="text" 
            placeholder="Ismingiz" 
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="+998" 
            value={phone} required
            onChange={(e) => setPhone(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Email" 
            value={email} required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Manzil" 
            value={address} required
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="button" type="submit" onClick={() => {
            if (fullName && phone && email && address) {
              alert("Ma'lumotlar muvaffaqiyatli jo'natildi!");
            }
          }}>
            Jo'natish
          </button>
        </form>
        <div className="detailCardDesc">
          <span>Batafsil</span>
          <h3>{products[`desc${i18n.language}`]} xozircha yo'q</h3>
        </div>
       </div>
      </div>
      <h2>Shourumimizga kelib, so'zlarimizga ishonch hosil qilish!</h2>
      <h5>Siz bilan ishlashdan minnatdor bo'lamiz.</h5>
    </div>
  );
};

export default Card;
