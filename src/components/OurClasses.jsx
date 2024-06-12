export default function OurClasses() {
  return (
    <section className="our-classes" id="classes">
      <div className="our-classes-header">
        <h2>OUR CLASSES</h2>
        <hr className="line" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo
          alias distinctio.
        </p>
      </div>
      <div className="our-classes-tab">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link font-weight-bold active"
              id="pills-yoga-tab"
              data-toggle="pill"
              href="#pills-yoga"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Yoga
            </a>
            <div className="square square-yoga"></div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-weight-bold"
              id="pills-group-tab"
              data-toggle="pill"
              href="#pills-group"
              role="tab"
              aria-controls="pills-group"
              aria-selected="false"
            >
              Group
            </a>

            <div className="square"></div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-weight-bold"
              id="pills-solo-tab"
              data-toggle="pill"
              href="#pills-solo"
              role="tab"
              aria-controls="pills-solo"
              aria-selected="false"
            >
              Solo
            </a>

            <div className="square"></div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-weight-bold"
              id="pills-stretching-tab"
              data-toggle="pill"
              href="#pills-stretching"
              role="tab"
              aria-controls="pills-stretching"
              aria-selected="false"
            >
              Stretching
            </a>

            <div className="square"></div>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-yoga"
          role="tabpanel"
          aria-labelledby="pills-yoga-tab"
        >
          <div className="content-container">
            <div className="content-text">
              <h3 className="">Why Are Your Yoga?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias pariatur voluptates sit? Voluptas distinctio
                blanditiis maiores similique dolorem. Minima nemo, repellat
                veritatis possimus consequuntur blanditiis?
              </p>
              <h3>When comes Yoga Your Time.</h3>
              <p>Saturday - Sunday: 8:00am - 10:00am</p>
              <p>Monday - Thursday: 10:00am - 12:00pm</p>
              <p>Wednesday - Friday: 3:00pm - 6:00pm</p>
            </div>
            <div>
              <img className="tab-img" src="/yoga.jpg" />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-group"
          role="tabpanel"
          aria-labelledby="pills-group"
        >
          <div className="content-container">
            <div className="content-text">
              <h3>Why Are Your Group?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias pariatur voluptates sit? Voluptas distinctio
                blanditiis maiores similique dolorem. Minima nemo, repellat
                veritatis possimus consequuntur blanditiis?
              </p>
              <h3>When comes Group Your Time.</h3>
              <p>Saturday - Sunday: 8:00am - 10:00am</p>
              <p>Monday - Thursday: 10:00am - 12:00pm</p>
              <p>Wednesday - Friday: 3:00pm - 6:00pm</p>
            </div>
            <div>
              <img className="tab-img" src="/group.webp" />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-solo"
          role="tabpanel"
          aria-labelledby="pills-solo-tab"
        >
          <div className="content-container">
            <div className="content-text">
              <h3>Why Are Your Solo?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias pariatur voluptates sit? Voluptas distinctio
                blanditiis maiores similique dolorem. Minima nemo, repellat
                veritatis possimus consequuntur blanditiis?
              </p>
              <h3>When comes Solo Your Time.</h3>
              <p>Saturday - Sunday: 8:00am - 10:00am</p>
              <p>Monday - Thursday: 10:00am - 12:00pm</p>
              <p>Wednesday - Friday: 3:00pm - 6:00pm</p>
            </div>
            <div>
              <img className="tab-img" src="/solo.jpg" />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-stretching"
          role="tabpanel"
          aria-labelledby="pills-stretching-tab"
        >
          <div className="content-container">
            <div className="content-text">
              <h3>Why Are Your Stretching?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias pariatur voluptates sit? Voluptas distinctio
                blanditiis maiores similique dolorem. Minima nemo, repellat
                veritatis possimus consequuntur blanditiis?
              </p>
              <h3>When comes Stretching Your Time.</h3>
              <p className="time-text">Saturday - Sunday: 8:00am - 10:00am</p>
              <p className="time-text">Monday - Thursday: 10:00am - 12:00pm</p>
              <p>Wednesday - Friday: 3:00pm - 6:00pm</p>
            </div>
            <div>
              <img className="tab-img" src="/stret.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
