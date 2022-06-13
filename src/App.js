import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import TopNavbar from './main/TopNavbar'
import MainNav from './main/MainNav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'
import About from './pages/AboutPage';
import Footer from './main/Footer';
import MainFooter from './main/MainFooter'

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Container>
        <GlobalStyles />
        <Router>
          <TopNavbar theme={theme} toggleTheme={toggleTheme} />
          <MainNav />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about-us' exact element={<About />} />
          </Routes>
          <Footer />
          <MainFooter />
        </Router>
        
      </Container>

    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  padding: 0 100px;
  position: relative;
`;

const LightTheme = {
  background: '#cbe9e3',
  fontColor: '#262626',
}

const DarkTheme = {
  background: '#0B486B',
  fontColor: '#FCF9ED',
}
