import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Layout/Footer';
import Accueil from './Pages/Accueil';
import SignIn from './Pages/SignIn';
import User from './Pages/User';


function Routers() {
  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user/:userName" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}

export default Routers;