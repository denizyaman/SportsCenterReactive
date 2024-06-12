export default function Purchase() {
  return (
    <section className="purchase-from-us">
      <div className="purchase-from-us-content">
        <h2>PURCHASE FROM US</h2>
        <hr className="line" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at
          est aliquam, quis quidem debitis.
        </div>
      </div>
      <div className="purchase-from-us-cards">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/purchase1.jpg"
            alt="Card image cap"
          />
          <div className="d-flex align-items-center flex-column">
            <div className="card-body">
              <h5 className="card-title">Kettlebell / 5kg</h5>
              <div className="card-text">
                <p>89,99$</p>/ 59,99$
              </div>
            </div>
            <div className="card-body card-body-link">
              <a href="#" className="card-link">
                <i className="bi bi-cart-fill"></i>Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/purchase2.jpg"
            alt="Card image cap"
          />
          <div className="d-flex align-items-center flex-column">
            <div className="card-body">
              <h5 className="card-title">Treadmill</h5>
              <div className="card-text">
                <p>89,99$</p>/ 59,99$
              </div>
            </div>
            <div className="card-body card-body-link">
              <a href="#" className="card-link">
                <i className="bi bi-cart-fill mr-1"></i>Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/purchase3.jpg"
            alt="Card image cap"
          />
          <div className="d-flex align-items-center flex-column">
            <div className="card-body">
              <h5 className="card-title">Adjustable Dumbbell</h5>
              <div className="card-text">
                <p>89,99$</p>/ 59,99$
              </div>
            </div>
            <div className="card-body card-body-link">
              <a href="#" className="card-link">
                <i className="bi bi-cart-fill"></i>Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="/purchase4.jpg"
            alt="Card image cap"
          />
          <div className="d-flex align-items-center flex-column">
            <div className="card-body">
              <h5 className="card-title">Kettlebell / 3kg</h5>
              <div className="card-text">
                <p>89,99$</p>/ 59,99$
              </div>
            </div>
            <div className="card-body card-body-link">
              <a href="#" className="card-link">
                <i className="bi bi-cart-fill"></i>Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
