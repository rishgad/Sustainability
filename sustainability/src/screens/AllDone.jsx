import React from "react";
import "./style.css";
import vector from "./vector.svg";

export const AllDone = () => {
    return (
        <div className="all-done">
            <p className="text-wrapper">Your done setting up your Profile!</p>

            <img className="vector" alt="Vector" src={vector} />

            <div className="ellipse" />

            <div className="overlap-group">
                <div className="div">Tap for Dashboard</div>
            </div>
        </div>
    );
};
