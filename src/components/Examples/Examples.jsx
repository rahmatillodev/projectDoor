import React from 'react'
import example1 from "../../assets/example1.png"
import example2 from "../../assets/example2.png"
import example3 from "../../assets/example3.png"
import "./Examples.css"
import { useTranslation } from 'react-i18next'
const Examples = () => {
  const {t} = useTranslation()
  return (
    <div className='example'>
        <div className="exampleLeft" data-aos="zoom-in-right" data-aos-delay="500">
            <div className="exampleLeftText">
            <span>{t('example.products')}</span>
            <h2>{t('example.exampleWork')}</h2>
            <p>{t('example.exampleText')}</p>
            </div>
        </div>
        <div className="exampleRight">
            <div>
            <img src={example3}  data-aos="zoom-in"  data-aos-delay="500" alt="example3" />
            <img src={example1}  data-aos="zoom-in"  data-aos-delay="700" alt="example1" />
            </div>
            <img src={example2}  data-aos="zoom-in"  data-aos-delay="900" alt="example2" />
        </div>
    </div>
  )
}

export default Examples