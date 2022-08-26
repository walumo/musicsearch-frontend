import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextInput from './TextInput';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SongCard from './SongCard';

const OutcomePage = () => {
  const [geniusResults, setGeniusResults] = useState(0);
      
      useEffect(() => {
          const axios = require('axios');
          const fetchData = async () => {
              try {
                  const result = await axios.get(
                  'https://localhost:44326/Api/songs?q=thriller', 
                  );
                  setGeniusResults(result.data);
  
              } catch (err) {
                  console.error(err);
              }
        
            };
            
            fetchData();
          }, []);

        try {
          return (
            <>
              {geniusResults.Result.map(result => <SongCard key={geniusResults.Result.indexOf(result)} result={result}/>)}
            </>
          )

        } catch {
          return (
            <>Ei onnaa</>
          )
        }

}

export default OutcomePage;