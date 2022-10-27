import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from '../src/components/Home/Home';
import Login from './components/Login/Login';
import NavbarComponent from './components/UI/Navbar/NavbarComponent';
import FooterComponent from './components/UI/Footer/FooterComponent';
import AuthContext from './store/Authentication-Context';
import Welcome from './components/Login/Welcome';
import ValoFetch from './components/FetchValorant/ValoTest';
import LogRocket from 'logrocket';
LogRocket.init('mxqbv6/test-projekt');
function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <NavbarComponent />
      {!ctx.isLoggedIn && <Login />}

      <Routes>
        {ctx.isLoggedIn && (
          <Route element={<Welcome />} path="/welcome"></Route>
        )}
        {ctx.isLoggedIn && <Route element={<Home />} path="/home"></Route>}
        {ctx.isLoggedIn && (
          <Route element={<ValoFetch />} path="/valorant-API"></Route>
        )}
      </Routes>

      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
