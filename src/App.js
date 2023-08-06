import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Announcement from "./components/announcement/Announcement";
import GraphDemo from "./components/charts/GraphDemo";
import SdpTools from "./components/portfolio/SdpTools";
import ReactFormWithValidation from "./components/formic/ReactFormWithValidation";
import Login from "./components/login/Login";


export default function App() {
  const isLoggedIn=false; 
  return (
    <>
      {!isLoggedIn?<Login />:<AppRouting/>}
    </>   
  );
}
 function AppRouting() {
  return (
    <div>
       <BrowserRouter>
      <Header />
        <Routes>       
          <Route path="/home" element={<SdpTools />}></Route>  
          <Route path="/announcement" element={<Announcement />}></Route>             
          <Route path="/graph" element={<GraphDemo  />}></Route>             
          <Route path="/formic" element={<ReactFormWithValidation  />}></Route>             
        </Routes>
      </BrowserRouter>
    </div>
  )
}





