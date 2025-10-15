import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BackgroundMask from "./components/layout/BackgroundMask";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <BackgroundMask />
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
