import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import University from './component/university';
// import College from './component/college';
// import Car from './component/car';
// import Fruit from './component/fruit';
// import Carlist from './component/carlist';
// import Header from './component/header';
import Player from './component/player';
// import Zoo from './component/zoo';
// import Bike from './component/bike';
// import Bus from './component/bus';
// import App1 from './aditya';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Car /> */}
    {/* <University /> */}
    {/* <College /> */}
    {/* < Fruit /> */}
    {/* <Carlist /> */}
    {/* <Zoo /> */}
    <Player/>
    {/* <Header/> */}
    {/* <Bike /> */}
    {/* <Bus /> */}
  </React.StrictMode>
);

reportWebVitals();
