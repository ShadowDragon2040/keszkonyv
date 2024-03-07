import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home';
import EgyKonyv from './EgyKonyv';
import Ujkonyv from './ujkonyv';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/ujkonyv" element={<Ujkonyv/>} exact />
          <Route path="/konyv/:id" element={<EgyKonyv/>} exact />
        </Routes>
    </Router>
  );
}

export default App;
