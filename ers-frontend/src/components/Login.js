import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";

const Login = () => {
  const clientId =
    "1045613546992-lk67gqk2dlbt1scjtt1s5vpv67rrriq7.apps.googleusercontent.com";

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
  };

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({ clientId: clientId, scope: "" });
    });
  }, []);

  const login = async (email, password) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/login`,
        { email, password },
        config
      );
      console.log(data);
      console.log("logged in");
    } catch (error) {
      console.log(error);
    }
  };
  const signUpWithGoogle = async (name, email) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/googleAuth`,
        { name, email },
        config
      );
      console.log("logged in");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <p>LOGIN</p>
      <form onSubmit={loginSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
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
      
      <Link to="/signup">Sign Up?</Link>
    </>
  );
};

export default Login;
