import Button from "./Button";
import "./Footer.css";
import Box from "../assets/icons/Box-illustration-footer.svg";

// Footer for entire page
function Footer() {
  return (
    <>
      <footer className="footer">
        <img className="footer-box" src={Box} alt="Boks illustrasjon" />
        <div className="footer-links">
          <div className="footer-column">
            <h3>Sider</h3>
            <ul>
              <li>
                <a href="/">Hjem</a>
              </li>
              <li>
                <a href="/about">Om oss</a>
              </li>
              <li>
                <a href="/HubDignity">Dignity Collective</a>
              </li>
              <li>
                <a href="/HubJdd">JDD Utstyr</a>
              </li>
              {/* ... other links ... */}
            </ul>
          </div>
          <div className="footer-column">
            <h3>Kontakt</h3>
            <p>KristiansadBR@mail.no</p>
            <p>909 09 090</p>
            <p>Besøksadresse</p>
            {/* ... other contact info ... */}
          </div>
          <div className="footer-column">
            <h3>Følg oss</h3>
            <a href="https://www.linkedin.com" className="footer-linkedin">
              LinkedIn
            </a>
          </div>
          <div className="footer-column">
            <h3>Ønsker du å ta del i en Agder e-hub?</h3>
            <Button
              testid="apply-button-footer"
              text="Send søknad"
              color="white"
              path="/apply"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
