import './App.css';
import {Routes, Route, redirect} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main'
import Profile from './pages/Profile'
import {useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase-config'
import {useEffect} from 'react'

function App() {

  const [user, setUser] = useState({})

  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    })
  },[])
 

  return (
    <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </div>

  );
}

export default App;
