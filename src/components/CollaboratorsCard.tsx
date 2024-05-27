//felles komponent for samarbeidspartnere kort

import "./CollaboratorsCard.css";

interface Props {
  image: string;
  alttext: string;
  link: string;
}

function CollaboratorsCard({ image, alttext, link }: Props) {
  return (
    <>
      <a className="collaborators-link" href={link}>
        <div className="collaborators-card">
          <img className="collaborators-logo" src={image} alt={alttext} />
        </div>
      </a>
    </>
  );
}

export default CollaboratorsCard;
