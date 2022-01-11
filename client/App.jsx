import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        {/* <Route exact path='/signup' element={} />
        <Route exact path='/companies' element={} />
        <Route exact path='/amazon' element={<Amazon />} />
        <Route exact path='/capitalone' element={} />
        <Route exact path='/meta' element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
