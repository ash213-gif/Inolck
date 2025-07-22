import React from "react";
import Navbar from "./Componenets/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componenets/Home";
import  Footer from './Componenets/Footer'
import Subject from "./Componenets/Subjects/Subject";
export default function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject" element={<Subject />} />
        </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  );
}
