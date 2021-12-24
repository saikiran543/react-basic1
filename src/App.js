import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navabar/Navbar";
import Home from "./components/Home";
import Html from "./components/Html";
import Css from "./components/Css";
import Javascript from "./components/Javascript";
import Sql from "./components/Sql";
import Python from "./components/Python";
import Php from "./components/Php";
import Bootstrap from "./components/Bootstrap";
import Howto from "./components/Howto";
import W3css from "./components/W3_css";
import Java from "./components/Java";
import Jquery from "./components/Jquery";
import Cpplus from "./components/Cpplus";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/html" exact element={<Html />} />
          <Route path="/css" exact element={<Css />} />
          <Route path="/javascript" exact element={<Javascript />} />
          <Route path="/sql" exact element={<Sql />} />
          <Route path="/python" exact element={<Python />} />
          <Route path="/php" exact element={<Php />} />
          <Route path="/bootstrap" exact element={<Bootstrap />} />
          <Route path="/howto" exact element={<Howto />} />
          <Route path="/w3.css" exact element={<W3css />} />
          <Route path="/java" exact element={<Java />} />
          <Route path="/jquery" exact element={<Jquery />} />
          <Route path="/c++" exact element={<Cpplus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
