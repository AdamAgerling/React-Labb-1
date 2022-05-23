import React from 'react'
import './App.css';
import Test from '../src/views/Test'
import Home from '../src/views/Home'
import {Route, Routes} from 'react-router-dom'
import NavbarComponent from './UI/NavbarComponent';
import FooterComponent from './UI/FooterComponent';
function App() { 


  return (
    <React.Fragment>
      <NavbarComponent />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Test />} path="/test" />
      </Routes>
     <FooterComponent />
    </React.Fragment>
    
  );
}

export default App;
