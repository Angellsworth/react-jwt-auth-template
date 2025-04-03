import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router'
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';

const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm/>} />
        <Route path='/sign-in' element={<SignInForm/>} />
      </Routes>
    </>
  );
};

export default App;
