import React from "react";
import image from "./image.svg";
import rectangle22 from "./rectangle-22.svg";
import rectangle29 from "./rectangle-29.svg";
import rectangle30 from "./rectangle-30.svg";
import rectangle31 from "./rectangle-31.svg";
import rectangle32 from "./rectangle-32.svg";
import "./AddingAppliancesStyle.css";
import vector from "./vector.svg";

export const AddingAppliance = () => {
    return (
        <div className="adding-appliance">
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
                <div className="rectangle-2" />

                <div className="appliance-name-2">&lt;Appliance Name&gt;</div>

                <div className="appliance-name-3">&lt;Appliance Name&gt;</div>

                <div className="room-name-2">&lt;Room Name&gt;</div>

                <div className="rectangle-3" />

                <div className="text-wrapper-2">Continue</div>

                <img className="img" alt="Rectangle" src={rectangle29} />

                <img className="rectangle-4" alt="Rectangle" src={rectangle22} />

                <img className="rectangle-5" alt="Rectangle" src={rectangle30} />

                <img className="rectangle-6" alt="Rectangle" src={rectangle31} />

                <div className="text-wrapper-3">Room</div>

                <div className="text-wrapper-4">Done</div>

                <div className="text-wrapper-5">Appliance</div>

                <img className="rectangle-7" alt="Rectangle" src={image} />

                <img className="rectangle-8" alt="Rectangle" src={rectangle32} />
            </div>
        </div>
    );
};
