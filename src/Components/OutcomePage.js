import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextInput from './TextInput';
import {useState} from 'react';

const ShowSong = () => {

  const Json = [
    {
    "ArtistinNimi": "Post Malone",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/ef176757a5735c7a104dd735543c1d20.1000x1000x1.png",
    "Hotti": false,
    "JulkaisuVuosi": 2018
    },
    {
    "ArtistinNimi": "Ty Dolla $ign (Ft. Joe Moses)",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/f420f88b7ed1237a86d7b059d1dfa4d0.600x600x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2013
    },
    {
    "ArtistinNimi": "Radiohead",
    "BiisinNimi": "Paranoid Android",
    "Image": "https://images.genius.com/bb8f17187f42bb0b4a0dcc17cad65355.1000x1000x1.png",
    "Hotti": false,
    "JulkaisuVuosi": 1997
    },
    {
    "ArtistinNimi": "Black Sabbath",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/dbb5a2790ba660b074638ccdb27e07c6.600x602x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 1970
    },
    {
    "ArtistinNimi": "Kanye West (Ft. Mr. Hudson)",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/feaa5aacd67b003ec2f6d5f87a0d2a3d.600x600x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2008
    },
    {
    "ArtistinNimi": "Ty Dolla $ign (Ft. B.o.B)",
    "BiisinNimi": "Paranoid (B.o.B Remix)",
    "Image": "https://images.genius.com/b00bca776c4b76a28c64b3e94193cb08.500x500x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2013
    },
    {
    "ArtistinNimi": "Juice WRLD",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/6264a57b912218145f8a2931d0925d80.500x500x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2017
    },
    {
    "ArtistinNimi": "French Montana (Ft. Johnny Maycash)",
    "BiisinNimi": "Paranoid",
    "Image": "https://images.genius.com/007e1aa20dbb3a27f7efb876d68b2e88.1000x1000x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2013
    },
    {
    "ArtistinNimi": "Ty Dolla $ign (Ft. French Montana, Mustard & Trey Songz)",
    "BiisinNimi": "Paranoid (Remix)",
    "Image": "https://images.rapgenius.com/d9ac036931e0d12810f4ae6273b98f44.500x500x1.jpg",
    "Hotti": false,
    "JulkaisuVuosi": 2014
    }
    ]

  const [geniusResults, setGeniusResults] = useState(Json);
  return (
    <div>
      <h1>{geniusResults[0].ArtistinNimi}</h1>
    </div>
  )
}


export default ShowSong;