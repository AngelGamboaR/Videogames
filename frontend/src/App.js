import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main'
import Profile from './pages/Profile'
import Videogames from './pages/Videogames'
import {useState, useEffect} from 'react'
import {auth} from './firebase-config'


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/videogame" element={<Videogames/>}/>
    </Routes>
    </div>

  );
}

export default App;

