import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
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
import ChangePassword from './pages/ChangePassword';
import EditEvent from './pages/EditEvent';
import QrReader from './pages/QrReader';
import Signup from './modules/SingInComponent/SignUp';


function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;

}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Sign />} />
        <Route path='event' element={<ProtectedRoute><ShowInfo /></ProtectedRoute>} />
        <Route path='allEvents' element={<ProtectedRoute><AllEvents /></ProtectedRoute>} />
        <Route path='personalHistory' element={<ProtectedRoute><PersonalHistory /></ProtectedRoute>} />
        <Route path='moderator' element={<ProtectedRoute><Mod /></ProtectedRoute>} />
        <Route path='permits' element={<ProtectedRoute><Permits /></ProtectedRoute>} />
        <Route path='collaborators' element={<ProtectedRoute><Collaborators /></ProtectedRoute>} />
        <Route path='eventsHistory' element={<ProtectedRoute><AdminEventsHistory /></ProtectedRoute>} />
        <Route path='analysis' element={<ProtectedRoute><Analysis /></ProtectedRoute>} />
        <Route path='payment' element={<ProtectedRoute><ModalTest /></ProtectedRoute>} />
        <Route path='purchasedTicket' element={<ProtectedRoute><PurchasedTicket /></ProtectedRoute>} />
        <Route path='homeWNavbar' element={<ProtectedRoute><HomeWNavbar /></ProtectedRoute>} />
        <Route path='createEvent' element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />
        <Route path='changePassword' element={<ChangePassword />} />
        <Route path='editEvent' element={<ProtectedRoute><EditEvent /></ProtectedRoute>} />
        <Route path='qr' element={<ProtectedRoute><QrReader /></ProtectedRoute>} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
