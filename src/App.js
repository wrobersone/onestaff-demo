import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import TopNavbar from './components/common/TopNavbar'
import MainNav from './components/common/MainNav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'
import About from './pages/AboutPage';
import TravelJobs from './pages/TravelJobs';
import ResourcesPage from './pages/ResourcesPage';
import OSMBlog from './pages/OSMBlog'

import Footer from './components/common/Footer';
import MainFooter from './components/common/MainFooter'

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
            <Route path='/osm-jobs' exact element={<TravelJobs />} />
            <Route path='/osm-resources' exact element={<ResourcesPage />} />
            <Route path='/osm-blog' exact element={<OSMBlog />} />
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
  background: '#307979',
  fontColor: '#262626',
}

const DarkTheme = {
  background: '#8b0a80',
  fontColor: '#FCF9ED',
}
