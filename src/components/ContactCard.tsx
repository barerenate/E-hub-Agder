import "../components/ContactCard.css";

interface Props {
  title: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  contactPersonImage: string;
  children?: React.ReactNode;
}

function ContactCard(props: Props) {
  return (
    <>
      <div className="contact-card-body">
        <div className="contact-card-image">
          <img
            className="contact-card-person-image"
            src={props.contactPersonImage}
            alt="Kontaktperson"
          />
        </div>
        <div className="contact-card-info">
          <p className="contact-card-title">{props.title}</p>
          <div className="contact-card-content">
            <p className="contact-card-text">{props.name}</p>
            <p className="contact-card-text">{props.phone}</p>
            <p className="contact-card-email">{props.email}</p>
            <p className="contact-card-text">{props.address}</p>
            <div className="contact-card-socials">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
