import React from "react";
import "./App.css";
import logo from "./img/logo.png";

import Header from "./components/Header";
import Garagem from "./components/Garagem";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">

      <Header />
      <Garagem />
      <Footer />
      
    </div>
  );
}
