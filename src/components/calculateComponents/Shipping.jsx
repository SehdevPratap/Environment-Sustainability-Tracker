import React, { useState } from 'react';
import axios from 'axios';
import "./Shipping.css"
const Shipping = () => {
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [distance, setDistance] = useState('');
    const [distanceUnit, setDistanceUnit] = useState('km');
    const [transportMethod, setTransportMethod] = useState('truck');
    const [emissions, setEmissions] = useState(null);

    const handleCalculateEmissions = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer GB1hlptW9ji0zHsvqMIw`,
                'Content-Type': 'application/json'
            }
        };

        const body = {
            type: "shipping",
            weight_value: parseFloat(weight),
            weight_unit: weightUnit,
            distance_value: parseFloat(distance),
            distance_unit: distanceUnit,
            transport_method: transportMethod
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
        <div className="container-flight">
            <div className="hero-shipping">
              <div className="flight-heading"><h1>Shipping Emissions Calculator</h1></div>
            </div>
            <div className="main-flight">

            <form>
            <div className="input">
              <label htmlFor="">Weight Unit:</label>
              <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                  <option value="kg">Kilograms (kg)</option>
                  <option value="lb">Pounds (lb)</option>
              </select>

            </div>
            <div className="input">
            <label htmlFor="">Shipment Weight:</label>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                />
            </div>
            <div className="input">
              <label htmlFor="">Distance Unit:</label>
              <select value={distanceUnit} onChange={(e) => setDistanceUnit(e.target.value)}>
                  <option value="km">Kilometers (km)</option>
                  <option value="mi">Miles (mi)</option>
              </select>
            </div>
            <div className="input">
              <label htmlFor="">Distance:</label>
              <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="Enter distance"
                  />

            </div>
            <div className="input">
              <label htmlFor="">Transport Method:</label>
              <select value={transportMethod} onChange={(e) => setTransportMethod(e.target.value)}>
                  <option value="plane">Plane</option>
                  <option value="ship">Ship</option>
                  <option value="truck">Truck</option>
                  <option value="train">Train</option>
              </select>

            </div>
            <div className="flight-calculate" onClick={handleCalculateEmissions}>CALCULATE</div>
            </form>
            {emissions && <p>Estimated CO2 Emissions: {emissions} kg</p>}
            </div>
        </div>
    );
};

export default Shipping;

