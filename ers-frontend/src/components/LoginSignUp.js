import React, { Fragment, useRef, useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import "./LoginSignUp.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";

const LoginSignUp = () => {
  const Navigate = useNavigate();
  const clientId =
    "1045613546992-lk67gqk2dlbt1scjtt1s5vpv67rrriq7.apps.googleusercontent.com";

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`http://localhost:4000/api/v1/login`, {
        email: loginEmail,
        password: loginPassword,
      });
      console.log("logged in", data);
      localStorage.setItem("user", loginEmail);
      Navigate("/reviews");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data } = await axios.post(
        `http://localhost:4000/api/v1/register`,
        { name: user.name, email: user.email, password: user.password }
      );
      console.log("registered", data);
      // localStorage.setItem("user", user.email);
      // Navigate("/reviews");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({ clientId: clientId, scope: "" });
    });
  }, []);

  const signUpWithGoogle = async (name, email) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/googleAuth`,
        { name, email }
      );
      localStorage.setItem("user", email);
      Navigate("/reviews");
      window.location.reload();
      console.log("logged in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            {/* <Link to="/password/forgot">Forget Password ?</Link> */}
            <input type="submit" value="Login" className="loginBtn" />
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={(res) => {
                console.log(res.profileObj);
                signUpWithGoogle(res.profileObj.name, res.profileObj.email);
              }}
              onFailure={() => {
                console.log("bad");
              }}
              cookiePolicy={"single_host_origin"}
            />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>
            <input type="submit" value="Register" className="signUpBtn" />
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={(res) => {
                console.log(res.profileObj);
                signUpWithGoogle(res.profileObj.name, res.profileObj.email);
              }}
              onFailure={() => {
                console.log("bad");
              }}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
