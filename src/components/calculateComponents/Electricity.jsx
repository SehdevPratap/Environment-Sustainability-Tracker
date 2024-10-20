import React, { useState } from 'react';
import axios from 'axios';
import './Electricity.css'
const Electricity = () => {
  const [kWh, setKWh] = useState('');
  const [unit, setUnit] = useState('kwh');
  const [country, setCountry] = useState('US');
  const [emissions, setEmissions] = useState(null);

    const handleCalculateEmissions = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer GB1hlptW9ji0zHsvqMIw`,
                'Content-Type': 'application/json'
            }
        };

         const body = {
            type: "electricity",
            electricity_unit: unit,
            electricity_value: parseFloat(kWh),
            country: country
        };

        try {
            const response = await axios.post('https://www.carboninterface.com/api/v1/estimates', body, config);
            const emissionsKg = response.data.data.attributes.carbon_kg;
            setEmissions(emissionsKg);
        } catch (error) {
            console.error('Error fetching emissions data:', error.response ? error.response.data : error.message);
            setEmissions("Error: Unable to calculate emissions.");
        }
    };

    return (
      <div className="container-elec">
        <div className="hero-elec">
          <div className="elec-heading"><h1>Electricity Emissions Calculator</h1></div>
        </div>
        <div className="main-elec">
      <form>
        <div className="input">
          <label htmlFor="">Unit:</label>
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="kwh">kWh</option>
              <option value="mwh">MWh</option>
          </select>
      </div>
        <div className="input">
        <label htmlFor="">Electricity Usage:</label>
      <input
          type="number"
          value={kWh}
          onChange={(e) => setKWh(e.target.value)}
          placeholder="Enter electricity usage"
          />
        </div>
        <div className="input">
          <label htmlFor="">Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="US">United States of America</option>
              <option value="CA">Canada</option>
              <option value="AT">Austria</option>
              <option value="BE">Belgium</option>
              <option value="BG">Bulgaria</option>
              <option value="HR">Croatia</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czechia</option>
              <option value="DK">Denmark</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="GR">Greece</option>
              <option value="HU">Hungary</option>
              <option value="IE">Ireland</option>
              <option value="IT">Italy</option>
              <option value="LV">Latvia</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MT">Malta</option>
              <option value="NL">Netherlands</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="RO">Romania</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="ES">Spain</option>
              <option value="SE">Sweden</option>
              <option value="GB">United Kingdom</option>
          </select>
          </div>
          <div className="flight-calculate" onClick={handleCalculateEmissions}>CALCULATE</div>
      {emissions && <p>Estimated CO2 Emissions: {emissions} kg</p>}
      </form>
      </div>
  </div>
    );
};

export default Electricity;

