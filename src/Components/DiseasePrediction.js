import React,{useState,useEffect} from 'react';
import axios from "axios";
import Select from "react-select";

function DiseasePrediction() {
    const [selectedSymptom, setSelectedSymptom] = useState(null);
    const [selectedSymptomsList, setSelectedSymptomsList] = useState([]);
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const requestData = {
      symptom_list: selectedSymptomsList, 
  };

    useEffect(() => {
        // window.scrollTo({ top: 0, behavior: "smooth" });
        const fetchSymptoms = async () => {
          const apiUrl = "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFpc2gxMjMucmF2aUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEyOTEzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIzLTA5LTE4IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2OTUxNTg1NzEsIm5iZiI6MTY5NTE1MTM3MX0.2FA1mk8dSIo4f68zexiMRgEUHFwDmRhCR5EmsYSmBh4&format=json&language=en-gb";
          try {
            const response = await axios.get(apiUrl);
            console.log(response.data);
            setResult(response.data);
          } catch (error) {
            setError(error);
          }
        };
    
        fetchSymptoms();
      }, []);

    const handleAddSymptom = () => {
        if (selectedSymptom) {
          setSelectedSymptomsList([...selectedSymptomsList, selectedSymptom]);
          setSelectedSymptom(null);
        }
      };

    const PredictDisease = () => {
      axios.post('/predict', requestData, {
        headers: {
            'Access-Control-Allow-Origin':"*",
            'Content-Type': 'application/json',
        },
        })
        .then(response => {
            console.log(response.data.predictions);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const options = result.map((symptom) => ({
        value: symptom.ID,
        label: symptom.Name,
      }));

  return (
    <div style={{width:"80vh",marginLeft:"10vh"}}>
        <label>
            Symptoms:
            <Select
              options={options}
              value={selectedSymptom}
              onChange={(selectedOption) => setSelectedSymptom(selectedOption)}
              placeholder="Select a symptom"
              isSearchable={true}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              type="button"
              onClick={handleAddSymptom}
            >
              Add Symptom
            </button>
            {selectedSymptomsList.length > 0 && (
              <div className="selected-symptoms-list">
                <h3>Selected Symptoms:</h3>
                <ul>
                  {selectedSymptomsList.map((symptom, index) => (
                    <li key={index}>{symptom.label}</li>
                  ))}
                </ul>
              </div>
            )}
          </label>
          <button className='google-icon-button' onClick={PredictDisease}> Predict</button>
    </div>
  )
}

export default DiseasePrediction