import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';



export default function TextInput() {
  const [input, setInput] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    console.log(input)
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Standard" variant="standard" onChange={(e)=> {setInput(e.target.value)}}/>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleClick}
      />
    </Box>
  );
}