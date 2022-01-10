import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        {/* <Route exact path='/signup' element={} />
        <Route exact path='/companies' element={} />
        <Route exact path='/amazon' element={<Amazon />} />
        <Route exact path='/capitalone' element={} />
        <Route exact path='/meta' element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
