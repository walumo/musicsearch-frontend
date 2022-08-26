import React from 'react';
import {useEffect, useState} from 'react';
import SongCard from './SongCard';
import { CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const OutcomePage = ({queryString, lat, lon}) => {
  const [geniusResults, setGeniusResults] = useState(0);
  
      useEffect(() => {
          console.log("Query from outcomepage: " +queryString)
          const axios = require('axios');
          const fetchData = async () => {
              try {
                const result = await axios.get('https://localhost:44326/Api/songs', { params: { q: queryString }});
                setGeniusResults(result.data);
  
              } catch (err) {
                  console.error(err);
              }
            };
            
            fetchData();
          }, [queryString]);

        try {
          return (
            <>
              {geniusResults.Result.map(result => <SongCard key={geniusResults.Result.indexOf(result)} result={result} lat={lat} lon={lon}/>)}
            </>
          )

        } catch {
          return (
            <>
            <br/>
            <br/>

            functin App(){
              let[loading, setLoading] = useState(true);
              return (
                <div className="loading">
                <button onClick={()=> setLoading(!loading)}></button>
                </div>
              );
              }

            <ScaleLoader/>
            </>
          )
        }

}

export default OutcomePage;