import {useState} from 'react';

const ConnectToBackend = () => {
    const [backendData, setbackendData] = useState();
    
    
    fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => setbackendData(data.total))       
    
  
  
    
    return (
        <div>
        <h1>{backendData}</h1>
        
        </div>

    )
    // }
  
  }
  
  
  export default ConnectToBackend;

