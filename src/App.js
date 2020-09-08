import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import QuickSearch from './components/QuickSearch/QuickSearch'
import HowItWorks from './components/HowItWorks/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import BecomePartner from './components/BecomePartner/BecomePartner'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Header />
        <About />
        <QuickSearch />
        <HowItWorks />
        <WhyChooseUs />
        <BecomePartner />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
