import React from "react";
import group from "./group.png";
import mdiLightEye from "./mdi-light-eye.svg";
import mdiPasswordOutline from "./mdi-password-outline.svg";
import "./style.css";

export const LoFiSignIn = () => {
  return (
    <div className="lo-fi-sign-in">
      <div className="ellipse" />

      <div className="overlap">
        <div className="solar-user-linear">
          <img className="group" alt="Group" src={group} />
        </div>

        <div className="overlap-group">
          <div className="text-wrapper">Username</div>

          <div className="text-wrapper">Username</div>
        </div>
      </div>

      <div className="div-wrapper">
        <div className="div">Sign In</div>
      </div>

      <div className="overlap-group-2">
        <div className="text-wrapper-2">Password</div>

        <img
          className="mdi-password-outline"
          alt="Mdi password outline"
          src={mdiPasswordOutline}
        />

        <img className="mdi-light-eye" alt="Mdi light eye" src={mdiLightEye} />
      </div>

      <div className="text-wrapper-3">Forgot Password?</div>

      <p className="don-t-have-an">
        <span className="span">Don’t have an account? </span>

        <span className="text-wrapper-4">Sign up</span>
      </p>
    </div>
  );
};
