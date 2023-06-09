import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Sign from "./pages/Sign";
import Home from './pages/Home';
import ShowInfo from './pages/ShowInfo';
import AllEvents from './pages/AllEvents';
import PersonalHistory from './pages/PersonalHistory';
import Mod from './pages/Mod';
import Permits from './pages/Permits';
import Collaborators from './pages/Collaborators';
import AdminEventsHistory from './pages/AdminEventsHistory';
import Analysis from './pages/Analysis';
import ModalTest from './pages/ModalTest';
import PurchasedTicket from './pages/PurchasedTicket';
import HomeWNavbar from './pages/HomeWNavbar';
import CreateEvent from './pages/CreateEvent';
import Example from './pages/Example';
import ChangePassword from './pages/ChangePassword';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="signin" element={<Sign />}/>
        <Route path='event' element={<ShowInfo/>}/>
        <Route path='allEvents' element={<AllEvents/>}/>
        <Route path='personalHistory' element={<PersonalHistory/>}/>
        <Route path='moderator' element={<Mod/>}/>
        <Route path='permits' element={<Permits/>}/>
        <Route path='collaborators' element={<Collaborators/>}/>
        <Route path='eventsHistory' element={<AdminEventsHistory/>}/>
        <Route path='analysis' element={<Analysis/>}/>
        <Route path='payment' element={<ModalTest/>}/>
        <Route path='purchasedTicket' element={<PurchasedTicket/>}/>
        <Route path='homeWNavbar' element={<HomeWNavbar/>}/>
        <Route path='createEvent' element={<CreateEvent />}/>
        <Route path='example' element={<Example />}/>
        <Route path='changePassword' element={<ChangePassword />}/>
      </Routes>
    </>
  );
}

export default App;
