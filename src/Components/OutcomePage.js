import React from 'react';
import {useEffect, useState} from 'react';
import SongCard from './SongCard';

const OutcomePage = ({geniusResults, lat, lon}) => {

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