import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Sign from "./pages/Sign";
import Home from './pages/Home';
import ShowInfo from './pages/ShowInfo';
import AllEvents from './pages/AllEvents';
import PersonalHistory from './pages/PersonalHistory';
import Permits from './pages/Permits';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="signin" element={<Sign />}/>
        <Route path='event' element={<ShowInfo/>}/>
        <Route path='allEvents' element={<AllEvents/>}/>
        <Route path='allEvents' element={<AllEvents/>}/>
        <Route path='personalHistory' element={<PersonalHistory/>}/>
        <Route path='permits' element={<Permits/>}/>
      </Routes>
    </>
  );
}

export default App;
