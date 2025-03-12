import React from "react";
import "./style.css";
import vector from "./vector.svg";

export const SetUpHome = () => {
    return (
        <div className="set-up-home">
            <div className="set-up-your-home">
                Set up your <br />
                Home!
            </div>

            <div className="overlap">
                <img className="vector" alt="Vector" src={vector} />
            </div>

            <div className="overlap-group">
                <div className="rectangle" />

                <div className="room-name">&lt;Room Name&gt;</div>

                <div className="appliance-name">&lt;Appliance Name&gt;</div>

                <div className="text-wrapper">&lt;Appliance Name&gt;</div>

                <div className="div">&lt;Appliance Name&gt;</div>
            </div>

            <div className="overlap-group-2">
                <div className="rectangle" />

                <div className="appliance-name-2">&lt;Appliance Name&gt;</div>

                <div className="appliance-name-3">&lt;Appliance Name&gt;</div>

                <div className="room-name-2">&lt;Room Name&gt;</div>
            </div>

            <div className="div-wrapper">
                <div className="text-wrapper-2">Continue</div>
            </div>
        </div>
    );
};
