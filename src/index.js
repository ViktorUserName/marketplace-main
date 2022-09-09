import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import './Index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner/>
    <Services/>
  </React.StrictMode>
);

