import axios from 'axios';
import {useEffect, useState} from 'react';

const ConnectToBackend = () => {

    const [backendData, setbackendData] = useState(0);

    const axios = require('axios');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(
                'https://localhost:44326/Api/songs?q=thriller', 
                );
                setbackendData(result.data);

            } catch (err) {
                console.error(err);
            }
      
          };
          
          fetchData();
        }, []);

    const printData = () => {
        try {
            return "Tulos backendistä: " + backendData.Result[0].Artist;

        } catch {
            return "Ei natsannut";
        }
        
    }

    return (
        <div>
            <h2>{printData()}</h2>

        </div>
    );
    }
  
  export default ConnectToBackend;

