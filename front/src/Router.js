import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Layout/Footer';
import Accueil from './Pages/Accueil';
import SignIn from './Pages/SignIn';
import User from './Pages/User';



function Routers() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  };



export default Routers;