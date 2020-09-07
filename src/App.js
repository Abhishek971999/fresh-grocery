import React,{Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About'
import QuickSearch from './components/QuickSearch/QuickSearch'
import HowItWorks from './components/HowItWorks/HowItWorks'
function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <QuickSearch />
      <HowItWorks />
    </Fragment>
  );
}

export default App;
