import "./HubComponent.css";
import Button from "../components/Button";
import SinglePricetable from "./SinglePricetable";
import CollaboratorsCard from "./CollaboratorsCard";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

import instagramicon from "../assets/icons/instagram.svg";
import linkedinicon from "../assets/icons/linkedin.svg";

//this component creates the layout for all three hubpages, uses props to change values on the pages

//interface Props declares the types for the values we want to be able to change for hub-pages
interface Props {
  companyTitle: string;
  companyLink: string;
  companyDescription: string;
  hubBannerName: string;
  hubBannerPhone: string;
  hubBannerAdress: string;
  hubBannerEmail: string;
  companyLogo: string;
  companyImage: string;
  hubNeedsDescription: string;
  hubContactPersonImage: string;
  hubContactPerson: string;
  collaborators: {link: string, image: string, alttext: string} [];
  priceKontor: string;
  priceLagerplass: string;
  priceMøterom: string;
  pricePodkaststudio: string;
  priceFotostudio: string;
  priceHR: string;
  priceMentor: string;
  priceRegnskapsfører: string;
  linkedinicon: string;
  instagramicon: string;
  instagram: string;
  linkedin: string;
}

function HubComponent(props: Props) {
  const {} = props;
  return (
    <>
      <div className="hero">
        <div className="hero-left-column">
          <div className="hero-row">
            <div className="company-logo" >{props.companyTitle}
            </div>
          </div>
          <div className="hero-row">
            <p className="company-desc">{props.companyDescription}</p>
          </div>
          <div className="hero-row">
            <div className="hub-website-button">
              <Button
                path={props.companyLink}
                text="Besøk nettside"
                color="green"
                testid="hub-website-button"
              />
            </div>
          </div>
        </div>
        <div className="hero-right-column">
          <img
            className="company-image"
            src={props.companyImage}
            alt="Dignity Collective bilde"
          />
        </div>
      </div>
      <div className="hub-banner"></div>
      <div className="hub-green-section">
        <div className="hub-wrapper">
          <div className="hub-left-column">
            <h1 className="hub-wants-title">HVA SER VI ETTER?</h1>
            <p className="hub-wants-description">
              Vi søker å samarbeide med bedrifter som deler vårt fokus på
              bærekraft, kvalitet og innovasjon. Vi ser spesielt etter bedrifter
              som tilbyr spesialiserte produkter med et klart miljømessig
              formål.
            </p>
            <p className="hub-wants-description">
              I tillegg verdsetter vi håndverk og dedikasjon til kvalitet, og
              ønsker å samarbeide med bedrifter som tilbyr unike produkter laget
              med omhu og oppmerksomhet på detaljer.
            </p>
            <p className="hub-contact-title">Høres dette ut som noe for deg?</p>
            <div className="hub-apply-button">
              <Button
                path="/apply"
                text="Send søknad"
                color="white"
                testid="hub-apply-button"
              />
            </div>
          </div>
          <div className="hub-right-column">
            <SinglePricetable
              priceKontor={props.priceKontor}
              priceLagerplass={props.priceLagerplass}
              priceMøterom={props.priceMøterom}
              pricePodkaststudio={props.pricePodkaststudio}
              priceFotostudio={props.priceFotostudio}
              priceHR={props.priceHR}
              priceMentor={props.priceMentor}
              priceRegnskapsfører={props.priceRegnskapsfører}
            />
          </div>
        </div>
      </div>
      <div className="contact-section-hub">
        <ContactCard
          title="Kontaktinfo"
          name={props.hubBannerName}
          phone={props.hubBannerPhone}
          email={props.hubBannerEmail}
          address={props.hubBannerAdress}
          contactPersonImage={props.hubContactPersonImage}
        >
          <div className="social-box">
            <Link className="contact-card-link" to={props.instagram}>
              <img className="social-icon" src={instagramicon} alt="instagram" />
            </Link>
          </div>
          <div className="social-box">
            <Link className="contact-card-link" to={props.linkedin}>
              <img className="social-icon" src={linkedinicon} alt="linked-in" />
            </Link>
          </div>
        </ContactCard>
      </div>
      <div className="collaborators-section">
        <div className="hub-width">
          <div className="collaborators-row">
            <h1 className="collaborators-title">
              BEDRIFTER VI SAMARBEIDER MED:
            </h1>
          </div>
          <div className="collaborators-cards-row">
            <div className="collaborators-cards">
              {props.collaborators.map(item => {
                return (
                  <CollaboratorsCard link={item.link} image={item.image} alttext={item.alttext}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HubComponent;
