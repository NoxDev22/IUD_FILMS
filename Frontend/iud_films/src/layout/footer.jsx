import { Logo } from "../components/logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <Logo />
        <ul className="footer_list">
          <li className="footer_li">
            <a href="#" className="footer__links">
              Privacy Policy
            </a>
          </li>
          <li className="footer_li">
            <a href="#" className="footer__links">
              Terms of Service
            </a>
          </li>
          <li className="footer_li">
            <a href="#" className="footer__links">
              Help Center
            </a>
          </li>
          <li className="footer_li">
            <a href="#" className="footer__links">
              Contact Us
            </a>
          </li>
        </ul>
        <p className="footer_copy">&copy; IUD Films. All rights reserved</p>
      </div>
    </footer>
  );
}
