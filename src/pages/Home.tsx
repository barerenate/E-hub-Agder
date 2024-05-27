import PriceTable from "../components/PriceTable";
import "./Home.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import linkedinicon from "../assets/icons/linkedin.svg";

//banner logoer
import bannerjdd from "../assets/icons/herobannerjdd.svg";
import bannerdignity from "../assets/icons/herobannerdignity.svg";
import bannerewaves from "../assets/icons/herobannerewaves.svg";
import bannerkrzbiz from "../assets/icons/herobannerkrzbiz.svg";
import collaboration from "../assets/images/collaboration.png";
import herovideo from "../assets/videos/herovideo.mp4";

//fordeler imports
import borge from "../assets/images/ehubagderkontaktperson.jpg";
import fellesfunksjoner from "../assets/images/fellesfunksjoner.svg";
import veiledning from "../assets/images/veiledning.svg";
import kompetansedeling from "../assets/images/kompetansedeling.svg";
import bærekraft from "../assets/images/bærekraft.svg";
import økonomi from "../assets/images/økonomi.svg";

import ContactCard from "../components/ContactCard";

function Home() {
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-left-column">
          <div className="home-hero-row">
            <div className="home-hero-title-white">VELKOMMEN TIL</div>
            <div className="home-hero-title-green"> E-HUB AGDER</div>
          </div>
          <div className="home-hero-row">
            <div className="home-hero-subtitle">
              ET SAMARBEID FOR <span className="green-text">VEKST</span> I
              E-HANDEL
            </div>
          </div>
          <div className="home-hero-row">
            <div className="home-hero-text">
              E-hub Agder er et samarbeidskonsept for netthandelsbedriftene i
              Agder-regionen. Vi tilbyr felles fasiliteter og
              logistikkløsninger, stordriftsfordeler og mulighet for bærekraftig
              vekst!
            </div>
          </div>
          <div className="home-hero-row">
            <div className="home-hero-button">
              <Button
                text="Priser og tilbud"
                color="white"
                testid="home-hero-button"
                scrollTo="pricing-offers"
              />
            </div>
          </div>
        </div>
        <div className="home-hero-right-column">
          <div className="video-trim">
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              webkit-playsinline
              playsInline
            >
              <source
                src={herovideo}
                type="video/mp4"
                aria-label="video som viser klipp fra kontor, en by i agder og et lager"
              ></source>
            </video>
          </div>
        </div>
      </div>
      <div className="home-hero-banner">
        <div className="home-hero-banner-column">
          <img
            className="home-hero-banner-logo"
            src={bannerjdd}
            alt="JDD utstyr logo"
          />
        </div>
        <div className="home-hero-banner-column">
          <img
            className="home-hero-banner-logo"
            src={bannerdignity}
            alt="Dignity collective logo"
          />
        </div>
        <div className="home-hero-banner-column">
          <img
            className="home-hero-banner-logo"
            src={bannerewaves}
            alt="E-waves logo"
          />
        </div>
        <div className="home-hero-banner-column">
          <img
            className="home-hero-banner-logo"
            src={bannerkrzbiz}
            alt="Kristiansand buisness region logo"
          />
        </div>
      </div>
      <div className="video-section">
        <div className="video-section-left-column">
          <div className="video-section-row">
            <div className="video-section-title">HVA ER E-HUB AGDER?</div>
          </div>
          <div className="video-section-row">
            <div className="video-section-subtitle">VÅRT MÅL</div>
          </div>
          <div className="video-section-row">
            <div className="video-section-text">
              Sammen med våre samarbeidspartnere, ønsker vi å fremme vekst og
              skape nye arbeidsplasser for netthandelsbedrifter. Ved å samle
              netthandelsbedrifter under samme tak, legger vi til rette for
              uformell kompetansedeling - den som skjer under lunsjpausen eller
              over en kaffekopp.
            </div>
            <div className="video-section-text">
              Målet vårt er å oppmuntre bedrifter med erfaring innen netthandel
              til å dele sin kunnskap. Dette skaper vinn-vinn-situasjoner som du
              ikke får oppnådd alene. Vi ønsker å styrke veksten og
              konkurransedyktigheten til din bedrift ved å utnytte
              stordriftsfordelene du får ved å samarbeide med andre.
            </div>
          </div>
          <div className="video-section-row">
            <div className="video-section-button">
              <Button
                path="/about"
                text="Mer om oss"
                color="blue"
                testid="video-section-button"
              />
            </div>
          </div>
        </div>
        <div className="video-section-right-column">
          <img
            className="home-image"
            src={collaboration}
            alt="Sammarbeidende gruppe"
          />
        </div>
      </div>
      <div className="video-points-section">
      <div className="video-points">
        <div className="video-points-column">
          <div className="video-points-title">Tilgang til fasiliteter</div>
          <div className="video-points-text">
            Våre hubber har et utvalg av fasiliteter tilgjengelig, inkludert
            delt lager, kontorer og møterom.
          </div>
        </div>
        <div className="video-points-column">
          <div className="video-points-title">Stordriftsfordeler</div>
          <div className="video-points-text">
            Gjennom samarbeid med en av våre hubber kan nystartede bedrifter dra
            nytte av stordriftsfordeler.
          </div>
        </div>
        <div className="video-points-column">
          <div className="video-points-title">Uformell kompetansedeling</div>
          <div className="video-points-text">
            Ved å dele kontorlokale med andre netthandlere, får du tilgang til
            et unikt fellesskap med uformell kompetansedeling.
          </div>
        </div>
      </div>
      </div>
      <div id="pricing-offers" className="price-table-section">
        <h1 className="price-table-title">E-HUBS I AGDER</h1>
        <p className="price-table-subtitle">
          Usikker på hvilken e-hub som passer best for deg? Hver e-hub har sine
          unike tilbud og fordeler.
        </p>
        <PriceTable />
      </div>
      <div className="benefits-section">
        <h1 className="benefits-title">FORDELER</h1>
        <p className="benefits-subtitle">
          E-hub prosjektet gir en rekke fordeler som fremmer vekst,
          kunnskapsdeling og bærekraft.
        </p>
        <div className="benefits-cards">
          <div className="benefits-card">
            <img
              className="benefit-img"
              src={fellesfunksjoner}
              alt="bilde"
            ></img>
            <h2 className="benefit-subheader">Felles funksjoner</h2>
            <p className="benefit-content">
              Vi er her for å hjelpe deg med å kutte kostnader ved å tilby
              felles løsninger innen regnskap, HR, markedsføring, lager og
              logistikk. Gjennom samarbeid oppnår vi stordriftsfordeler som gir
              deg enda bedre tilbud og tjenester.
            </p>
          </div>
          <div className="benefits-card">
            <img
              className="benefit-img"
              src={veiledning}
              alt="veiledning illustrasjon"
            ></img>
            <h2 className="benefit-subheader">Veiledning</h2>
            <p className="benefit-content">
              Vil du unngå de samme feilene som andre? Med god veiledning fra
              erfarne netthandelsfolk kan du sikre suksessen til din bedrift.
            </p>
          </div>
          <div className="benefits-card">
            <img
              className="benefit-img"
              src={kompetansedeling}
              alt="kompetansdeling illustrasjon"
            ></img>
            <h2 className="benefit-subheader">Kompetansedeling</h2>
            <p className="benefit-content">
              Visste du at den mest verdifulle kompetansedelingen og innovasjon
              ofte skjer i uformelle settinger. Ved å dele kontorlokale med
              andre netthandlere, får du tilgang til et unikt fellesskap.
            </p>
          </div>
        </div>
        <div className="benefits-cards">
          <div className="benefits-card">
            <img
              className="benefit-img"
              src={bærekraft}
              alt="Bærekraft illustrasjon"
            ></img>
            <h2 className="benefit-subheader">Bærekraft</h2>
            <p className="benefit-content">
              Samkjøring av import og eksport bidrar ikke bare til økt vekst,
              men også til mer effektiv ressursutnyttelse. Gjennom felles drift
              og deling av lagerfasiliteter reduseres avfall og CO2-utslipp
              betydelig.
            </p>
          </div>
          <div className="benefits-card">
            <img
              className="benefit-img"
              src={økonomi}
              alt="økonomi illustrasjon"
            ></img>
            <h2 className="benefit-subheader">Økonomiske fordeler</h2>
            <p className="benefit-content">
              Vi vet at tilgang på investorer og kapital kan utgjøre forskjellen
              mellom suksess og fiasko.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-card-section">
        <ContactCard
          title=" Ta kontakt for en uformell prat"
          name="Børge Jomaas"
          phone="901 904 786"
          email="Borge.jomaas@kristiansand.kommune.no"
          address="Rådhusgata 18, Kristiansand"
          contactPersonImage={borge}
        >
          <div className="social-box">
            <Link className="contact-card-link" to="https://www.linkedin.com/">
              <img className="social-icon" src={linkedinicon} alt="" />
            </Link>
          </div>
        </ContactCard>
      </div>
    </>
  );
}

export default Home;
