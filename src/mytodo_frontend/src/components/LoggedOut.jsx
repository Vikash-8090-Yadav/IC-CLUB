import React from "react";
import { useAuth } from "./Auth"


function LoggedOut() {
  const { login } = useAuth();


  const gradientTextStyle = {
    background:
      "linear-gradient(93.57deg, #2658bd 2.93%, rgba(76, 82, 248, 0.689) 37.09%, rgba(141, 179, 255, 0.433555) 65.23%, rgba(106, 6, 94, 0.143) 97.14%, rgba(229, 231, 235, 0) 112.92%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "48px",
    fontWeight: "bold",
    fontweight: "700",
    fontFamily: "Space Grotesk",
    lineHeight: 1.2,
  };

  return (
    <div className="">

<div className="bg-landing-page h-screen">
      <div className="flex font-bold justify-center items-center flex-col w-screen mt-20">
        <div className="flex-grow flex flex-col justify-center items-center mt-32">
          <div className="flex flex-col justify-center items-center mt-10">
            <p style={gradientTextStyle} className="font-grotesk text-center">
              Welcome to IC CLUB
            </p>
            <p className="mt-6 mb-10 text-2xl font-inter text-[#8652e8] font-inter">
              Your First investment Web3 Community
            </p>
            
          </div>
          <div className="h-64 w-10" />
        </div>
      </div>
    </div>
    <div className="container">
      <h1>Internet Identity Client</h1>
      <h2>You are not authenticated</h2>
      <p>To log in, click this button!</p>
      <button type="button" id="loginButton" onClick={login}>
        Log in
      </button>
    </div>
    </div>
  );
}

export default LoggedOut;
