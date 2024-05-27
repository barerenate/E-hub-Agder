import { useState } from 'react';
import './Tooltip.css';

interface Props {
  text: string;
  children: React.ReactNode;
}

// Tooltip for the different offers in PriceTable
function Tooltip ({children,text}: Props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="tooltip-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
              {children}
        {isHovered && <div className="tooltip-box">{text}</div>}
      </div>
    );

}

export default Tooltip;
