import Login from "./components/Login";
import { BrowserRouter , Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import React, {  useState} from "react";

function App() {
  const [loggedInUser,setLoggedInUser] = useState(null)
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/login" element={<Login />} />
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
