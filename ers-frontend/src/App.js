import './App.css'
import { BrowserRouter , Route,Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import MyReviews from './components/MyReviews';
import AssignedReviews from './components/AssignedReviews';
import Profile from './components/Profile';
import AllUsers from './components/AllUsers';
import Private1 from './components/Private1';
import Private2 from './components/Private2';
import Footer from './components/Footer';
import LoginSignUp from './components/LoginSignUp';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={
    <LoginSignUp/>}/>
      <Route element ={<Private1/>}>
      <Route path='/reviews' element={<MyReviews/>} />
      <Route path='/assigned' element={<AssignedReviews/>} />
      <Route path='/profile' element={<Profile/>} />
      </Route>

      <Route element ={<Private2/>}>
      <Route path='/allusers' element={<AllUsers/>} />
      </Route>

    </Routes>
    <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
