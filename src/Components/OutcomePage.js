import React from 'react';
import SongCard from './SongCard';
import { useEffect } from 'react';

const OutcomePage = ({geniusResults, lat, lon}) => {

  useEffect(()=>{
    const axios = require('axios');
    async function postArtistData(){
      try {
        await axios.post('https://verse-api.azurewebsites.net/Api/logger', {
          id: "",
          Artist: geniusResults.Result[0].Artist,
          Song: geniusResults.Result[0].Track,
          Latitude: String(lat),
          Longitude: String(lon)
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      } catch (error) {
        console.log("Waiting for data...")
      }  
    }
  
  geniusResults? postArtistData() : void(0);
  
  },[geniusResults, lat, lon])
        try {
          return (
            <>
              {geniusResults.Result.map(result => <SongCard key={geniusResults.Result.indexOf(result)} result={result} lat={lat} lon={lon}/>)}
            </>
          )

        } catch {
          return (
            <>
            </>
          )
        }
}

export default OutcomePage;