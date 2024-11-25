
import React,{ useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './home'; 
import Meditationdetail from './meditationdetail';
import Chatbothome from './chatbothome';
import Chatbotmain from './chatbotmain';
import Explorearticles from './explorearticles';
import Whatismeditation from './whatismeditation';
import Libraryscreen from './libraryscreen';
import Music from "./music"
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { setClientToken } from "./musicdetail";
import Meditationbenefits from "./meditationbenefits";
import Howtomeditate from "./howtomeditate";
import Mentalhealtdetail from "./mentalhealthdetail";
import Guidemeditation from "./guidemeditation";
import Meditationforbegineers from "./meditationforbegineers";
import Meditationtechnique from "./meditationtechnique";
import Fitnessmain from "./fitnessmain"
function App() {
  const [token,setToken]  =useState("");

  useEffect(()=> {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
      setClientToken(_token);
    } 
    else{
      setToken(token);
      setClientToken(token);
    }
  },[]);
  return !token ? (
    <Music />
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/meditationdetail" element={<Meditationdetail />} />
        <Route path="/chatbothome" element={<Chatbothome />} />
        <Route path="/chatbotmain" element={<Chatbotmain />} />
        <Route path="/whatismeditation" element={<Whatismeditation />} />
        <Route path="/explorearticles" element={<Explorearticles />} />
        <Route path="/meditationbenefits" element={<Meditationbenefits />} />
        <Route path="/howtomeditate" element={<Howtomeditate />} />
        <Route path="/libraryscreen" element={<Libraryscreen />} />
        <Route path="/mentalhealthdetail" element={<Mentalhealtdetail />} />
        <Route path="/guidemeditation" element={<Guidemeditation />} />
        <Route path="/meditationforbegineers" element={<Meditationforbegineers />} />
        <Route path="/meditationtechnique" element={<Meditationtechnique />} />
        <Route path="/fitnessmain" element={<Fitnessmain />} />
      </Routes>
    </Router>
  );
  
}

export default App;
