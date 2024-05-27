import { Link } from "react-router-dom";
import { useState } from "react";
import { DropDownItems } from "../contentLists/Dropdownitems";
import "./Dropdown.css"


// Dropdown in navbar showing the different hubs
function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
    const closeDropdown = () => {setDropdown(!dropdown)};

    return (
        <>
        <ul data-testid="dropdown-display" className={dropdown ? "dropdown clicked" : "dropdown"} onClick={closeDropdown}>
        {DropDownItems.map((item, index) => {
            return (
            <li key={index} className="dropdown-item">
                <Link data-testid={`dropdown-items${index}`} className="dropdown-link" to={item.path}>{item.title}</Link>
            </li>
            )
        })}
        </ul>
        </>
    )
}

export default Dropdown;