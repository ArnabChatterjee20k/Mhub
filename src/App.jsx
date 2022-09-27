import Container from '@mui/material/Container';
import CssBaseline  from '@mui/material/CssBaseline';
import { Navbar } from '../components/Navbar';
function App() {
  return (
    <>
      <CssBaseline />
      <Navbar links={[1,2,3]}/>
      <Container fixed>
      </Container>
    </>
  )
}

export default App
