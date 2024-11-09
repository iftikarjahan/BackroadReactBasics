import { footerLinks, socialLinks } from "../data";

export default function Footer() {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {/*These unordered list could be dynamically rendered */}
          {/* <li>
            <a href="#home" className="footer-link">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="footer-link">
              about
            </a>
          </li>
          <li>
            <a href="#services" className="footer-link">
              services
            </a>
          </li>
          <li>
            <a href="#featured" className="footer-link">
              featured
            </a>
          </li> */}

          {footerLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="footer-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="footer-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}

          {/* <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li> */}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
}
