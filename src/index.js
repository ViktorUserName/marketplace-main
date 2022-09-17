import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.scss';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import About from './components/About/About';
import Specification from './components/Specification/Specification';
import Request from './components/Request/Request';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner/>
    {/* <Services/>
    <About/>
    <Specification/>
    <Request/>
    <Footer/> */}
  </React.StrictMode>
);

