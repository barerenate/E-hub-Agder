import "./About.css";
import agder from "../assets/images/Vest-Agder.png";
import CollaboratorsCard from "../components/CollaboratorsCard";
import { AboutCollaboratorItems } from "../contentLists/AboutCollaboratorItems";

function About() {
  return (
    <>
      <div className="white-container">
        <div className="page-one-left-column">
          <div className="page-one-row">
            <h1 className="hubs-headline">E-HUBS PROSJEKTET</h1>
            <h2 className="our-history-headline">VÅR HISTORIE</h2>
            <p>
              E-hub Agder er et samarbeid mellom E-Waves - Nettverk for
              e-handel, Innoventus Sør, Business Region Kristiansand og
              netthandelbedriftene Dignity Collective, JDD Utstyr og Babybanden.
            </p>
            <p>
              Vi ønsker å skape økt konkurransekraft og vekst i regionen. Målet
              er flere arbeidsplasser og å legge til rette for bærekraftig
              netthandel gjennom samlokalisering. Vi samarbeider med
              næringslivet og det offentlige i og utenfor Agder.
            </p>
            <p>
              Vi vil jobbe for å redusere miljøavtrykket for bransjen. Det
              inkluderer delt lagerplass, kontorlokaler, det å skape
              stordriftsfordeler, noe som legger til rette for en mer integrert
              og effektiv drift. Vi mener at formell og uformell
              kompetansedeling og nettverksbygging bedriftene mellom er viktig
              for å skape vekst.
            </p>
          </div>
        </div>
        <div className="page-one-right-column">
          <img className="agder-image" src={agder} alt="Kart over agder" />
        </div>
      </div>
      <div className="green-container">
        <div className="page-two-heading">
          <h1 className="collab-headline">SAMARBEIDSPARTNERE</h1>
          <p>
            E-hub Agder har mange interessenter og samarbeidspartnere som på
            ulike måter bidrar til prosjektet.
          </p>
        </div>
        <div className="cards">
          {AboutCollaboratorItems.map(item => {
            return (
              <CollaboratorsCard link={item.link} image={item.image} alttext={item.alttext}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default About;
