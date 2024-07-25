import "./About.css";
import { FaInfinity } from "react-icons/fa6";
const About = () => {
  return (
    <div className="about">
      <div className="aboutText">
        <h1>10 yil</h1>
        <p>Tajribaga ega mutaxasislar</p>
      </div>
      <div className="aboutText">
        <h1>7 000 dan</h1>
        <p>Ortiq topshirilgan loyihalar</p>
      </div>
      <div className="aboutText">
        <h1>47 000 ta</h1>
        <p>Ishlab chiqarilgan mahsulot</p>
      </div>
      <div className="aboutText">
        <h1><FaInfinity /> </h1>
        <p>Cheksiz asortiment</p>
      </div>
    </div>
  );
};

export default About;
