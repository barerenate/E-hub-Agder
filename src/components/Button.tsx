import { Link } from "react-router-dom";
import "./Button.css";

type ButtonColor = "white" | "blue" | "green" | "light-green";

interface Props {
  path?: string;
  color: ButtonColor;
  text: string;
  testid?: string;
  scrollTo?: string;
}

function Button({ color, text, path = "", testid, scrollTo }: Props) {
  if (scrollTo) {
    return (
      <a href={`#${scrollTo}`}>
        <button data-testid={testid} className={`btn ${color}`}>
          {text}
        </button>
      </a>
    );
  } else {
    return (
      <>
        <Link to={path}>
          <button data-testid={testid} className={`btn ${color}`}>
            {text}
          </button>
        </Link>
      </>
    );
  }
}

export default Button;
