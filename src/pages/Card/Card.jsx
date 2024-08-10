import React from "react";
import { useParams } from "react-router-dom";
import "./Card.css"
const Card = ({ data }) => {
  const { id } = useParams();

  const products = data.find((product) => product.id === parseInt(id));
  if (!products) {
    return <p>Product not found</p>;
  }

  return (
    <div className="detailCard">
      <div className="detailCardWrapper">
        <div className="detailCardImage">
          <img src={products.image} alt="" />
        </div>
       <div className="detailCardRight">
       <div className="detailCardText">
          <h1>{products.title}</h1>
          <p>
            Kategoriya: <span>{products.category}</span>
          </p>
          <h3>
            Quyidagi formani to’ldiring. Tez orada siz bilan menejerlarimiz
            bog’lanib, batafsil ma’lumot berishadi...
          </h3>
        </div>
        <div className="detailCardForm">
          <input type="text" placeholder="Ismingiz" />
          <input type="text" placeholder="+998" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Manzil" />
          <button className="button">Jo’natish</button>
        </div>
        <div className="detailCardDesc">
          <span>Batafsil</span>
          <h3>{products.description}</h3>
        </div>
       </div>
      </div>
      <h2>Shourumimizga kelib, so’zlarimizga ishonch hosil qilish!</h2>
      <h5>Siz bilan ishlashdan minnatdor bo’lamiz.</h5>
    </div>
  );
};

export default Card;
