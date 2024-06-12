export default function Contact() {
  return (
    <section className="contact-us" id="contact">
      <div className="contact-us-header">
        <h2>CONTACT US</h2>
        <hr className="line" />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          asperiores veritatis alias blanditiis itaque temporibus. Excepturi,
          modi est.
        </div>
      </div>
      <div className="contact-us-content">
        <div className="contact-us-input">
          <div className="contact">
            <div className="left-container">
              <div className="phone-number-container">
                <div className="phone contact-label">Mobile Number</div>
                <div className="example">+135 772 213 2323</div>
              </div>
              <div className="email-address-container">
                <div className="email contact-label">Email Address</div>
                <div className="example">demo@demo.com</div>
              </div>
            </div>
            <div className="input-h3">
              <h3>Make An Appointment</h3>
            </div>
            <div className="contact-input">
              <input
                type="text"
                placeholder="Your Name"
                className="input-item input-item-input"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input-item input-item-input"
              />
              <textarea
                type="text"
                placeholder="Your Massage"
                className="input-item input-item-textarea"
              ></textarea>
            </div>
          </div>
          <div className="google-map">
            <iframe
              width="400"
              height="400"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20turkey%20istanbul+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
