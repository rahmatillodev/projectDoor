import React from 'react'
import example1 from "../../assets/example1.png"
import example2 from "../../assets/example2.png"
import example3 from "../../assets/example3.png"
import "./Examples.css"
const Examples = () => {
  return (
    <div className='example'>
        <div className="exampleLeft">
            <div className="exampleLeftText">
            <span>Mahsulotlar</span>
            <h2>Bizning ishlarimizdan Na’munalar</h2>
            <p>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
     
            </div>
        </div>
        <div className="exampleRight">
            <div>
            <img src={example3} alt="example3" />
            <img src={example1} alt="example1" />
            </div>
            <img src={example2} alt="example2" />
        </div>
    </div>
  )
}

export default Examples