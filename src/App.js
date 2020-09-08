import React,{Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import QuickSearch from './components/QuickSearch/QuickSearch'
import HowItWorks from './components/HowItWorks/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import BecomePartner from './components/BecomePartner/BecomePartner'
function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <QuickSearch />
      <HowItWorks />
      <WhyChooseUs />
      <BecomePartner />
    </Fragment>
  );
}

export default App;
