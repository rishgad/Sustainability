import React from "react";
import "./style.css";

export const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="overlap-group">
        <img
          className="weui-arrow-outlined"
          alt="Weui arrow outlined"
          src="https://c.animaapp.com/MSJSoBXE/img/weui-arrow-outlined.svg"
        />
      </div>

      <div className="text-wrapper">Sign Up</div>

      <div className="overlap">
        <div className="div">Name</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper-2">Username</div>
      </div>

      <div className="overlap-2">
        <div className="text-wrapper-2">Email Address</div>
      </div>

      <div className="overlap-3">
        <div className="text-wrapper-2">Password</div>
      </div>

      <div className="overlap-4">
        <div className="text-wrapper-3">Continue</div>
      </div>
    </div>
  );
};
