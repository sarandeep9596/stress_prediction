import React from "react"
import './footer.css';
const Footer = () => {
    return(
<footer>
  <div className="footercontainer">
    <div className="row">
      <div className="col-md-4">
        <div className="stay-in-the-loop">
          <h3>Stay in the loop</h3>
          <p>Be the first to get updates on our latest content, special offers, and new features.</p>
          <p>By signing up, you're agreeing to receive marketing emails from Zenify your life. You can unsubscribe at any time. For more details, check out our <a href="#">Privacy Policy</a>.</p>
        </div>
      </div>
      <div className="col-md-2">
        <div className="get-some-headspace">
          <h4>Get some Zenify</h4>
          <ul>
        
            <li><a href="#">All articles</a></li>
            <li><a href="#">Subscribe</a></li>
            <li><a href="#">Zenify  for Work</a></li>
            <li><a href="#">Administrator Portal</a></li>
            <li><a href="#">Explore our content library</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <div className="about-us">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">About Zenify</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Partnership request</a></li>
            <li><a href="#">Sleep App</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <div className="support">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Mental health resources</a></li>
            <li><a href="#">Accessibility Statement</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Cookie policy</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
      <h1>❂ Zenify your life</h1>
        <div className="my-headspace">
          <a href="#" className="btn btn-primary">Login</a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>&copy; 2024 Zenify your life Inc.</p>
        </div>
        <div className="col-md-6 text-right">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Terms & conditions</a></li>
            <li className="list-inline-item"><a href="#">Privacy policy</a></li>
            <li className="list-inline-item"><a href="#">Consumer Health Data</a></li>
            <li className="list-inline-item"><a href="#">Your privacy choices</a></li>
            <li className="list-inline-item"><a href="#">CA Privacy Notice</a></li>
          </ul>
          <div className="language-selector">
            <select>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
};
export default Footer;