import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { DropDownItems } from "../contentLists/Dropdownitems";
import menu from "../assets/icons/menu.svg";
import x from "../assets/icons/x.svg";
import dropdownicon from "../assets/icons/arrow-drop-down-line.svg";
import "./Navbar.css";
import ehubagderlogo from "../assets/icons/ehubagderlogo.svg";
import NavButton from "./NavButton";

// Navigation bar for entire page
function Navbar() {
  
  const [click, SetClick] = useState(false);
  const handleClick = () => SetClick(!click);
  const closeMobileMenu = () => SetClick(false);
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => { setDropdown(true);};
  const hideDropdown = () => { setDropdown(false);};
  
  return (
    <>
      <nav data-testid="navbar" className="navbar">
        <Link to="/" className="nav-logo">
          <img src={ehubagderlogo} alt="E-hub Agder logo"/>
        </Link>
        <div data-testid="nav-menu-icon" className="menu-icon" onClick={handleClick}>
          {click ? <img src={x} alt="x" /> : <img src={menu} alt="meny" />}
        </div>
        <ul data-testid="nav-menu" className={click ? "nav-menu active" : "nav-menu"} >
          <li className="nav-item">
            <Link data-testid="nav-link-home" className="nav-link" to="/" onClick={closeMobileMenu}> Hjem </Link>
          </li>
          <li className="nav-item">
            <Link data-testid="nav-link-about" className="nav-link" to="/about" onClick={closeMobileMenu}> Om oss </Link>
          </li>
          <li data-testid="nav-dropdown" className="nav-item desktop" onMouseEnter={showDropdown}onMouseLeave={hideDropdown}>
            <p>Våre hubber</p> <img src={dropdownicon} alt="ikon" />
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item mobile">
            <p>Våre hubber</p> <img src={dropdownicon} alt="ikon" />
          </li>
          {DropDownItems.map((item, index) => {
            return (
              <li key={index} className="nav-item mobile">
                <Link className="nav-link mobile" to={item.path} onClick={closeMobileMenu}>{item.title}</Link>
              </li>
            );
          })}
       <li className="nav-item apply-button" onClick={closeMobileMenu}>
        <NavButton/>
      </li>
        </ul>
      </nav>
    </>
  );
}



export default Navbar;
