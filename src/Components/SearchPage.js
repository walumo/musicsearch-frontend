import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextInput from './TextInput';

export default function SearchPage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>Etusivu</h1>
        <TextInput/>

      </Container>
    </>
  );
}