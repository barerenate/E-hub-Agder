import HubComponent from "../components/HubComponent";
import { DignityCollaboratorItems } from "../contentLists/DignityCollaboratorItems";
import dignitylogo from "../assets/images/dignitycollectivelogo.jpg";
import dignityimage from "../assets/images/dignitycollectiveimage.png";
import dignityContactPersonImage from "../assets/images/dignitykontaktperson.jpeg";

//here we pass the prop values and put the attributes that matches the hub
function HubDignity() {
  return (
    <>
      <HubComponent
        companyTitle="DIGNITY COLLECTIVE"
        companyLink="https://www.dignitycollective.no/"
        companyDescription="Dignity Collective består av dyktige fagfolk som støtter ambisiøse skapere til å utvikle egne produktserier og merkevarer.
        Vi hjelper til med konsept- og produktutvikling, finansiering, produksjon, logistikk, distribusjon med mer.."
        companyLogo={dignitylogo}
        companyImage={dignityimage}
        hubBannerName="Marius Sowka"
        hubBannerPhone="+47 12 345 678"
        hubBannerAdress="Vige Havnevei 6"
        hubBannerEmail="marius@dignitycollective.no"
        hubNeedsDescription="Vi søker å samarbeide med bedrifter som deler vårt fokus på bærekraft, kvalitet og innovasjon. Vi ser spesielt etter bedrifter som tilbyr spesialiserte produkter med et klart miljømessig formål. I tillegg verdsetter vi håndverk og dedikasjon til kvalitet, og ønsker å samarbeide med bedrifter som tilbyr unike produkter laget med omhu og oppmerksomhet på detaljer."
        hubContactPersonImage={dignityContactPersonImage}
        hubContactPerson="Kontaktperson Dignity Collective"
        collaborators = {DignityCollaboratorItems}
        priceKontor="Fra 400 NOK,-"
        priceLagerplass="Fra 400 NOK,-"
        priceMøterom="Fra 400 NOK,-"
        pricePodkaststudio="Fra 400 NOK,-"
        priceFotostudio="Fra 400 NOK,-"
        priceHR="Fra 400 NOK,-"
        priceMentor="Fra 400 NOK,-"
        priceRegnskapsfører="Fra 400 NOK,-"
        linkedinicon=""
        instagramicon=""
        instagram="https://www.instagram.com/dignitycollective/"
        linkedin="https://no.linkedin.com/company/dignity-collective-as"
      />
    </>
  );
}

export default HubDignity;
