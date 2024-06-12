export default function Bmi() {
  return (
    <section>
      <div className="bmi-calculator">
        <div className="bmi-calculator-text">
          <h2>BMI Calculator</h2>
          <p className="bmi-calculator-first-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            corrupti ducimus perferendis temporibus quo est!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quae aspernatur esse praesentium possimus enim?
          </p>
          <div className="bmi-calculator-input">
            <div className="bmi-calculator-height">
              <input id="inputHeight" type="number" placeholder="Your Height" />
              <p>cm</p>
            </div>
            <div className="bmi-calculator-weight">
              <input id="inputWeight" type="number" placeholder="Your Weight" />
              <p>kg</p>
            </div>
          </div>
        </div>
        <div className="bmi-calculator-img">
          <h3>
            Your BMI: <span id="bmi-value"></span>
          </h3>
          <img src="/bmi-index.jpg" />
          <div className="triangle"></div>
        </div>
      </div>
    </section>
  );
}
