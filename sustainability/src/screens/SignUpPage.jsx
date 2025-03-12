import React from "react";
import "./style.css";
import weuiArrowOutlined from "./weui-arrow-outlined.svg";

export const SignUpPage = () => {
    return (
        <div className="sign-up-page">
            <div className="overlap">
                <img
                    className="weui-arrow-outlined"
                    alt="Weui arrow outlined"
                    src={weuiArrowOutlined}
                />
            </div>

            <div className="text-wrapper">Sign Up</div>

            <div className="overlap-group">
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

            <div className="overlap-group-2">
                <div className="rectangle" />

                <div className="text-wrapper-3">Continue</div>
            </div>
        </div>
    );
};
