import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Sign from "./pages/Sign";
import Home from './pages/Home';
import ShowInfo from './pages/ShowInfo';
import AllEvents from './pages/AllEvents';
import PersonalHistory from './pages/PersonalHistory';
<<<<<<< HEAD
import Collaborators from './pages/Collaborators';
=======
import AdminEventsHistory from './pages/AdminEventsHistory';

>>>>>>> 14c900a7d2fa45cb05914a6548266bc49d2e23e2

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="signin" element={<Sign />}/>
        <Route path='event' element={<ShowInfo/>}/>
        <Route path='allEvents' element={<AllEvents/>}/>
        <Route path='personalHistory' element={<PersonalHistory/>}/>
<<<<<<< HEAD
        <Route path='collaborators' element={<Collaborators/>}/>
=======
        <Route path='eventsHistory' element={<AdminEventsHistory/>}/>
>>>>>>> 14c900a7d2fa45cb05914a6548266bc49d2e23e2
      </Routes>
    </>
  );
}

export default App;
