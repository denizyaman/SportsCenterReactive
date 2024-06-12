export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src="/logo.png" />
        </div>
        <div className="footer-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus
          placeat repudiandae, molestias enim sint eaque nihil, tempore ducimus
          magni autem necessitatibus obcaecati. Quisquam veritatis nam, numquam
          at aut quia.
        </div>
        <div className="footer-link-container">
          <div className="footer-link-item-content">
            <h2>Information</h2>
            <a>About-us</a>
            <a>Classes</a>
            <a>Blog</a>
            <a>Contact</a>
          </div>
          <div className="footer-link-item-content">
            <h2>Helpful Links</h2>
            <a>Services</a>
            <a>Supports</a>
            <a>Terms & Condition</a>
            <a>Privacy and Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
