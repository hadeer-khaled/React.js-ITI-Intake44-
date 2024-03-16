import "./Footer.css";
import BasicButton from "../Button/BasicButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="footer-section w-100 mt-5 px-5 py-5 d-flex justfify-content-center align-items-center">
      <div className="right-part w-50">
        <p>GET IN TOUCH</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            hadeer.khaled.elmalah&#64;gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            01120325563
          </li>
        </ul>
      </div>
      <div className="w-25">
        <BasicButton buttonContent={"Contact Me"} className="contact-btn" />
      </div>
      <div className="left-part w-25">
        <ul>
          <a href="https://www.facebook.com/deda.khaled.37" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="https://github.com/hadeer-khaled" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/hadeer-khaled-nabil/"
            target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
