import Login from "./components/Login";
import { BrowserRouter , Route,Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import React, {  useState} from "react";

function App() {
  const [user,setUser] = useState(null)
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
