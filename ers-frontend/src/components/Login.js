import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const Navigate = useNavigate();
  const clientId =
    "1045613546992-lk67gqk2dlbt1scjtt1s5vpv67rrriq7.apps.googleusercontent.com";

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
      localStorage.setItem("user",email)
      Navigate('/reviews');
      window.location.reload();
      console.log("logged in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="flex flex-row-reverse justify-around ml-12">
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
        <h1 className="flex items-center space-x-3 rtl:space-x-reverse ml-12">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dashboard</span>
        </h1>
      </div>
      
    </>
  );
};

export default Login;
