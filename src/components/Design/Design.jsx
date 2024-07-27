import "./Design.css";
import dots from "../../assets/dots.png";
const Design = () => {
  return (
    <div className="design">
      <h1>Yana bir ustunlik jihatimiz</h1>
      <span>7 bosqichli sifat nazoratidan o’tkazamiz</span>
      <div className="designImage">
        <div className="designCard designCard2">
          <div className="number">2</div>
          <div>
            <h2>BOSQICH</h2>
            <p>Provide the best service and very fast response.</p>
          </div>
        </div>

        <div className="designCard designCard1">
          <div className="number">1</div>
          <div>
            <h2>BOSQICH</h2>
            <p>Provide the best service and very fast response.</p>
          </div>
        </div>

        <div className="designCard designCard3">
          <div className="number">3</div>
          <div>
            <h2>BOSQICH</h2>
            <p>Provide the best service and very fast response.</p>
          </div>
        </div>
      </div>
      <img src={dots} alt="dots" className="dots" />
    </div>
  );
};

export default Design;
