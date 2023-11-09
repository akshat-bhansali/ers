import React,{useState,useEffect} from 'react'
import {GoogleLogin} from "react-google-login";
import {gapi} from "gapi-script";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
    const clientId = "1045613546992-lk67gqk2dlbt1scjtt1s5vpv67rrriq7.apps.googleusercontent.com";
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
      const { name, email, password } = user;
    
  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
};

const registerSubmit = (e) => {
  e.preventDefault();

  const myForm = new FormData();

  myForm.set("name", name);
  myForm.set("email", email);
  myForm.set("password", password);
  register(myForm);
};
useEffect(() => {
    gapi.load('client:auth2',()=>{gapi.client.init({clientId:clientId,scope:""})})
   
  }, []); 
  const register = async(userData)=>{
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.post(`http://localhost:4000/api/v1/register`, userData, config);
      console.log(data);
      console.log("registered")
    } catch (error) {
      console.log(error)
    }
  }
  const signUpWithGoogle = async(name,email)=>{
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http:localhost://4000/api/v1/googleAuth`,
        { name,email },
        config
      );
      console.log("logged in")
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <p>REGISTER</p>
      <form
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" />
                <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={(res)=>{
                console.log(res.profileObj);
                signUpWithGoogle(res.profileObj.name,res.profileObj.email);
              }} onFailure={()=>{console.log("bad")}} cookiePolicy={'single_host_origin'}/>
              </form>
      <Link to="/login">Login?</Link>
    </>
  )
}

export default SignUp
