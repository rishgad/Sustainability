import React from "react";
import group from "./group.png";
import phCarrotThin from "./ph-carrot-thin.svg";
import "./UserDashboardStyle.css";
import vector from "./vector.svg";

export const UserDashboard = () => {
    return (
        <div className="user-dashboard">
            <div className="welcome-name">Welcome, &lt;Name&gt;!</div>

            <div className="text-wrapper">Goals for the Week</div>

            <div className="div">Usage Update</div>

            <div className="text-wrapper-2">Recommendations</div>

            <div className="text-wrapper-3">Week Summary</div>

            <div className="text-wrapper-4">Dashboard</div>

            <div className="ellipse" />

            <div className="overlap">
                <img className="vector" alt="Vector" src={vector} />
            </div>

            <div className="overlap-group">
                <div className="rectangle" />

                <div className="rectangle-2" />

                <div className="rectangle-3" />

                <div className="rectangle-4" />
            </div>

            <div className="overlap-group-2">
                <div className="overlap-2">
                    <img
                        className="ph-carrot-thin"
                        alt="Ph carrot thin"
                        src={phCarrotThin}
                    />

                    <div className="ellipse-2" />
                </div>

                <div className="text-wrapper-5">Compost 4 times</div>
            </div>

            <div className="rectangle-5" />

            <div className="iconamoon">
                <img className="group" alt="Group" src={group} />
            </div>

            <div className="rectangle-6" />
        </div>
    );
};
