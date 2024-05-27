import "./PriceTable.css"
import Tooltip from "./Tooltip";
import info from "../assets/icons/info.svg"
import Button from "./Button";

// Table showing all prices for different offers provided by the e-hubs
function PriceTable()
{
    return(
        <>
            <div className="price-table-container">
                <table className="price-table">
                    <thead>
                    <tr className="table-head">
                        <th className="table-col col-one head">Fasiliteter</th>
                        <td className="table-col col-info"/>
                        <th className="table-col col-alt">JDD Utstyr</th>
                        <th className="table-col col-three">Dignity Collective</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="table-col col-one">Kontor</td>
                        <td className="table-col col-info">
                            <Tooltip text="This is the tooltip text">
                            <img src={info} alt="info"/>
                            </Tooltip>
                        </td>
                        <td className="table-col col-alt">Fra 400 NOK,-</td>
                        <td className="table-col col-three">6000 NOK,-</td>
                    </tr>
                    <tr>
                        <td className="table-col col-one">Lagerplass</td>
                        <td className="table-col col-info"><Tooltip text="This is the tooltip text">
                            <img src={info} alt="info"/>
                            </Tooltip>
                        </td>
                        <td className="table-col col-alt">Fra 400 NOK,-</td>
                        <td className="table-col col-three">Fra 200 NOK,-</td>
                    </tr>
                    <tr>
                        <td className="table-col col-one">Møterom</td>
                        <td className="table-col col-info">
                            <Tooltip text="This is the tooltip text">
                            <img src={info} alt="info"/>
                            </Tooltip>
                        </td>
                        <td className="table-col col-alt">Fra 400 NOK,-</td>
                        <td className="table-col col-three">Fra 200 NOK,-</td>

                    </tr>
                    <tr>
                        <td className="table-col col-one">Podkaststudio</td>
                        <td className="table-col col-info">
                            <Tooltip text="This is the tooltip text">
                            <img src={info} alt="info"/>
                            </Tooltip>
                        </td>
                        <td className="table-col col-alt">-</td>
                        <td className="table-col col-three">Fra 200 NOK,-</td>

                    </tr>
                    <tr>
                        <td className="table-col col-one">Fotostudio</td>
                        <td className="table-col col-info">
                            <Tooltip text="This is the tooltip text">
                            <img src={info} alt="info"/>
                            </Tooltip>
                        </td>
                        <td className="table-col col-alt">Fra 400 NOK,-</td>
                        <td className="table-col col-three">Fra 200 NOK,-</td>

                    </tr>
                    <tr>
                        <td className="table-col col-one">HR</td>
                        <td className="table-col col-info">
                            <Tooltip text="This is the tooltip text">
                            <img src={info} alt="info"/>
                            </Tooltip>
                        </td>
                        <td className="table-col col-alt">Fra 400 NOK,-</td>
                        <td className="table-col col-three">Fra 200 NOK,-</td>
              
                    </tr>
                    <tr>
                        <td className="table-col col-one">Mentor</td>
                        <td className="table-col col-info">
                            <Tooltip text="This is the tooltip text">
                            <img src={info} alt="info"/>
                            </Tooltip>
                        </td>
                        <td className="table-col col-alt">Fra 400 NOK,-</td>
                        <td className="table-col col-three">Fra 200 NOK,-</td>

                    </tr>
                    <tr>
                        <td className="table-col col-one">Regnskapsfører</td>
                        <td className="table-col col-info">
                            <Tooltip text="This is the tooltip text">
                            <img src={info} alt="info"/>
                            </Tooltip>
                        </td>
                        <td className="table-col col-alt">Fra 400 NOK,-</td>
                        <td className="table-col col-three">-</td>
             
                    </tr>
                    <tr className="final-row">
                        <td className="table-col col-one"> </td>
                        <td className="table-col col-info"></td>
                        <td className="table-col col-alt"> <Button testid="jdd-button-table" path="/hubjdd" text= "Utforsk JDD utstyr" color="white"/></td>
                        <td className="table-col col-three"><Button testid="dignity-button-table" path="/hubdignity" text="Utforsk Dignity Collective" color="white"/></td>
        
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PriceTable;