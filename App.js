import { useState } from 'react'
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  const [input, setInput] = useState('');

  return (
    <Router>
      <StyledContainer>
        <GlobalStyles/>
        <Navbar 
          setInput={setInput}
        />
        <Routes>
          <Route exact path="/" element={<Home input={input} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </StyledContainer>
    </Router>
  );
}

const StyledContainer = styled.div`
  min-height: 100vh;
`

export default App;
