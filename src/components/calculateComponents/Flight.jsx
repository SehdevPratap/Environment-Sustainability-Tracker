import React,{useState} from 'react';
import axios from 'axios';
import './Flight.css'
const Flight = () => {
  const [departure, setDeparture] = useState("lsc");
  const [destination, setDestination] = useState("yyz");
  const [passengers, setPassengers] = useState('');
  // const [classType, setClassType] = useState('economy');
  const [emissions, setEmissions] = useState(null);
  
  const handleCalculateEmissions = async () => {
    const config = {
        headers: {
            'Authorization': 'Bearer GB1hlptW9ji0zHsvqMIw',
            'Content-Type': 'application/json'
        }
    };

    const body = {
        type: "flight",
        passengers: parseInt(passengers),
        legs: [
            {departure_airport: departure, destination_airport: destination}
        ]
    };

    try {
        const response = await axios.post('https://www.carboninterface.com/api/v1/estimates', body, config);
        console.log("API Response:", response.data);
        setEmissions(response.data.data.attributes.carbon_kg);
    } catch (error) {
        console.error('Error fetching emissions data:', error.response ? error.response.data : error.message);
        

    }
};

  return (
    
    <div className="container-flight">
      <div className="hero-flight">
            <div className="flight-heading"><h1>Calculate your flight emissions!</h1></div>
      </div>
        <div className="main-flight">
            <div className="form">
              <form action="">
                <div className="radio">
                  <input type="radio" name="flight-type"/>
                  <label htmlFor="">Direct Flight</label>
                </div>
                <div className="radio">
                  <input type="radio" name="flight-type"/>
                  <label htmlFor="">Flight With a Stopover</label>
                </div>
                <div className="input">
                  <label htmlFor="">From* <div className="inst">(you need to enter <a href="https://www.iata.org/en/publications/directories/code-search/?airline.search=" target='_blank'>IATA</a> codes of the Airports)</div> </label>
                  <input type="input" name="flight-type" placeholder="Departure Airport" value={departure} onChange={e=>setDeparture(e.target.value)}/>
                </div>
                <div className="input">
                  <label htmlFor="">To*</label>
                  <input type="input" name="flight-type" placeholder="Destination Airport" value={destination} onChange={e=>setDestination(e.target.value)}/>
                </div>
                <div className="radio">
                  <input type="radio" name="flight-trip"/>
                  <label htmlFor="">Roundtrip</label>
                </div>
                <div className="radio">
                  <input type="radio" name="flight-trip"/>
                  <label htmlFor="">One Way</label>
                </div>
                <div className="input">
                  <label htmlFor="">No. of Passengers*</label>
                  <input type="number" name="flight-type" placeholder='0' value={passengers} onChange={e => setPassengers(e.target.value)}/>
                </div>
                <div className="radio">
                  <input type="radio" name="flight-class"/>
                  <label htmlFor="">Economy Class</label>
                </div>
                <div className="radio">
                  <input type="radio" name="flight-class"/>
                  <label htmlFor="">Premium Class</label>
                </div>
                <div className="flight-calculate" onClick={handleCalculateEmissions}>CALCULATE</div>
              </form>
                {emissions && <p>Estimated CO2 Emissions: {emissions} kg</p>}
                {/* <h1>{emissions}</h1> */}
            </div>
            
        </div>
    </div>
  )
}

export default Flight
