import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Car.css'

const Vehicle = () => {
    const [distance, setDistance] = useState('');
    const [distanceUnit, setDistanceUnit] = useState('km');
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [emissions, setEmissions] = useState(null);

    // Fetch vehicle makes when the component mounts
    useEffect(() => {
        fetchVehicleMakes();
    }, []);

    const fetchVehicleMakes = async () => {
        try {
            const response = await axios.get('https://www.carboninterface.com/api/v1/vehicle_makes', {
                headers: {
                    'Authorization': `Bearer GB1hlptW9ji0zHsvqMIw`
                }
            });
            console.log(response.data);
            setMakes(response.data.map(item => item.data)); // Assuming the data is directly under 'data'
        } catch (error) {
            console.error('Error fetching vehicle makes:', error);
        }
    };

    const fetchVehicleModels = async (makeId) => {
        try {
          const url = `https://www.carboninterface.com/api/v1/vehicle_makes/${makeId}/vehicle_models`;
    console.log("Fetching models from URL:", url)
            const response = await axios.get(`https://www.carboninterface.com/api/v1/vehicle_makes/${makeId}/vehicle_models`, {
                headers: {
                    'Authorization': `Bearer GB1hlptW9ji0zHsvqMIw`
                }
            });
            setModels(response.data.map(item => item.data)); // Assuming the data is directly under 'data'
        } catch (error) {
            console.error('Error fetching vehicle models:', error);
        }
    };

    const handleMakeChange = (e) => {
        const makeId = e.target.value;
        setSelectedMake(makeId);
        fetchVehicleModels(makeId);
    };

    const handleCalculateEmissions = async () => {
        if (!selectedModel) {
            alert("Please select a vehicle model.");
            return;
        }

        const config = {
            headers: {
                'Authorization': `Bearer GB1hlptW9ji0zHsvqMIw`,
                'Content-Type': 'application/json'
            }
        };

        const body = {
            type: "vehicle",
            vehicle_model_id: selectedModel,
            distance_value: parseFloat(distance),
            distance_unit: distanceUnit
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
          <div className="hero-car">
            <div className="flight-heading"><h1>Vehicle Emissions Calculator</h1></div>
          </div>
          <div className="main-flight">
            <form>

              <div className="input">
                <label htmlFor="">Distance Unit:</label>
                <select value={distanceUnit} onChange={(e) => setDistanceUnit(e.target.value)}>
                    <option value="km">Kilometers (km)</option>
                    <option value="mi">Miles (mi)</option>
                </select>

            </div>      
            <div className="input">
              <label htmlFor="">Distance Covered:</label>
              <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="Enter distance"
                  />
              </div>  
              <div className="input"> 
                <label htmlFor="">Select Manufacturer:</label>
                <select value={selectedMake} onChange={handleMakeChange}>
                    <option value="">Select Vehicle Make</option>
                    {makes.map((make) => (
                      <option key={make.id} value={make.id}>{make.attributes.name}</option>
                    ))}
                </select>
              </div> 
              <div className="input">
                <label htmlFor="">Select Model</label>
                <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                    <option value="">Select Vehicle Model</option>
                    {models.map((model) => (
                      <option key={model.id} value={model.id}>{model.attributes.name} ({model.attributes.year})</option>
                    ))}
                </select>
              </div>

              <div className="flight-calculate" onClick={handleCalculateEmissions}>CALCULATE</div>
            </form>
            {emissions && <p>Estimated CO2 Emissions: {emissions} kg</p>}
        </div>
        </div>
    );
};

export default Vehicle;


