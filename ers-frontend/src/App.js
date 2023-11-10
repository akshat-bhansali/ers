import Login from "./components/Login";
import { BrowserRouter , Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import React, {  useState} from "react";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
