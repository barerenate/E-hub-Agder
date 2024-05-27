import "./SinglePricetable.css";

import Tooltip from "./Tooltip";
import info from "../assets/icons/info.svg";

interface Props {
  priceKontor: string;
  priceLagerplass: string;
  priceMøterom: string;
  pricePodkaststudio: string;
  priceFotostudio: string;
  priceHR: string;
  priceMentor: string;
  priceRegnskapsfører: string;
}

// Table showing all prices for different offers provided by the e-hubs
function SinglePricetable(props: Props) {
  return (
    <>
      <div className="single-price-table-container">
        <table className="single-price-table">
          <thead>
            <tr className="single-table-head">
              <th className="single-table-col single-col-one single-head">
                Fasiliteter
              </th>
              <td className="single-table-col single-col-info"/>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="single-table-col single-col-one">Kontor</td>
              <td className="single-table-col single-col-info">
                <Tooltip text="This is the tooltip text">
                  <img src={info} alt="info"/>
                </Tooltip>
              </td>
              <td className="single-table-col single-col-alt">
                {props.priceKontor}
              </td>
            </tr>
            <tr>
              <td className="single-table-col single-ol-one">Lagerplass</td>
              <td className="single-table-col single-col-info">
                <Tooltip text="This is the tooltip text">
                <img src={info} alt="info"/>
                </Tooltip>
              </td>
              <td className="single-table-col single-col-alt">
                {props.priceLagerplass}
              </td>
            </tr>
            <tr>
              <td className="single-table-col single-col-one">Møterom</td>
              <td className="single-table-col single-col-info">
                <Tooltip text="This is the tooltip text">
                <img src={info} alt="info"/>
                </Tooltip>
              </td>
              <td className="single-table-col single-col-alt">
                {props.priceMøterom}
              </td>
            </tr>
            <tr>
              <td className="single-table-col single-col-one">Podkaststudio</td>
              <td className="single-table-col single-col-info">
                <Tooltip text="This is the tooltip text">
                <img src={info} alt="info"/>
                </Tooltip>
              </td>
              <td className="single-table-col single-col-alt">
                {props.pricePodkaststudio}
              </td>
            </tr>
            <tr>
              <td className="single-table-col single-col-one">Fotostudio</td>
              <td className="tsingle-able-col single-col-info">
                <Tooltip text="This is the tooltip text">
                <img src={info} alt="info"/>
                </Tooltip>
              </td>
              <td className="single-table-col single-col-alt">
                {props.priceFotostudio}
              </td>
            </tr>
            <tr>
              <td className="single-table-col single-col-one">HR</td>
              <td className="single-table-col single-col-info">
                <Tooltip text="This is the tooltip text">
                <img src={info} alt="info"/>
                </Tooltip>
              </td>
              <td className="single-table-col single-col-alt">
                {props.priceHR}
              </td>
            </tr>
            <tr>
              <td className="single-table-col single-col-one">Mentor</td>
              <td className="single-table-col single-col-info">
                <Tooltip text="This is the tooltip text">
                <img src={info} alt="info"/>
                </Tooltip>
              </td>
              <td className="single-table-col single-col-alt">
                {props.priceMentor}
              </td>
            </tr>
            <tr>
              <td className="single-table-col single-col-one">
                Regnskapsfører
              </td>
              <td className="single-table-col single-col-info">
                <Tooltip text="This is the tooltip text">
                <img src={info} alt="info"/>
                </Tooltip>
              </td>
              <td className="single-table-col single-col-alt">
                {props.priceRegnskapsfører}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SinglePricetable;
