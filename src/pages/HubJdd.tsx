import HubComponent from "../components/HubComponent";
import { JddCollaboratorItems } from "../contentLists/JddCollaboratorItems";
import jddlogo from "../assets/images/jddlogo.jpg";
import jddimage from "../assets/images/jddimage.png";
import jddContactPersonImage from "../assets/images/placeholderkontaktperson.jpeg";

//here we pass the prop values and put the attributes that matches the hub
function HubJdd() {
  return (
    <>
      <HubComponent
        companyTitle="JDD UTSTYR"
        companyLink="https://www.babybanden.no/"
        companyDescription="JDD er en aktør som tilbyr..."
        companyLogo={jddlogo}
        companyImage={jddimage}
        hubBannerName="Eirik Leirgulen"
        hubBannerPhone="+47 966 277 770"
        hubBannerAdress="Østre Lohnelier 84"
        hubBannerEmail="eirik@jdd.no"
        hubNeedsDescription="Vi søker å samarbeide med bedrifter som deler vårt fokus på bærekraft, kvalitet og innovasjon. Vi ser spesielt etter bedrifter som tilbyr spesialiserte produkter med et klart miljømessig formål. I tillegg verdsetter vi håndverk og dedikasjon til kvalitet, og ønsker å samarbeide med bedrifter som tilbyr unike produkter laget med omhu og oppmerksomhet på detaljer."
        hubContactPersonImage={jddContactPersonImage}
        hubContactPerson="Kontaktperson Dignity Collective"
        collaborators = {JddCollaboratorItems}
        priceKontor="Fra 500 NOK,-"
        priceLagerplass="Fra 500 NOK,-"
        priceMøterom="Fra 500 NOK,-"
        pricePodkaststudio="Fra 500 NOK,-"
        priceFotostudio="Fra 500 NOK,-"
        priceHR="Fra 500 NOK,-"
        priceMentor="Fra 500 NOK,-"
        priceRegnskapsfører="Fra 500 NOK,-"
        linkedinicon=""
        instagramicon=""
        instagram="https://www.instagram.com/jdd.no/"
        linkedin="https://www.linkedin.com/company/jddutstyr"
      />
    </>
  );
}

export default HubJdd;
