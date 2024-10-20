import './Calculate.css'
import {Link} from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";
import { PiCarProfile } from "react-icons/pi";
import { FaShippingFast } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

export default function Calculate(){
    return(
        <div className="m">
            <div className="hero">
                <div className="heading">
                Carbon Emission Calculator
                </div>
                <div className="para">
                    Track your Environmental impact by monitoring your carbon emissions
                </div>
            </div>
            <div className="calculate-cover">
            <div className="calculate-main">
                <div className="container-page">
                    <div className="page-heading">
                        <h1>Calculate your emissions, reduce your carbon footprint and support climate protection!</h1>
                    </div>
                    <div className="calculate-icons">
                        <Link to="/calculate/flight"><div className="flight"> <GiCommercialAirplane className="c-icons"/><br />Flight</div></Link>
                        <Link to="/calculate/car"><div className="car"> <PiCarProfile className="c-icons"/><br />Car</div></Link>
                        <Link to="/calculate/shipping"><div className="shipping"> <FaShippingFast className="c-icons"/><br />Shipping</div></Link>
                        <Link to="/calculate/electricity"> <div className="electric"> <MdElectricBolt className="c-icons"/><br />Electricity</div></Link>
                        
                        
                       
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}