import React from "react";
import iconamoonEditThin from "./iconamoon-edit-thin.svg";
import image from "./image.svg";
import "./style.css";
import vector from "./vector.svg";

export const RoomsAppliancePage = () => {
    return (
        <div className="rooms-appliance-page">
            <div className="text-wrapper">Bedroom</div>

            <div className="div">Guest Room</div>

            <div className="text-wrapper-2">Kitchen</div>

            <div className="text-wrapper-3">Laundry Room</div>

            <div className="text-wrapper-4">Your Appliances</div>

            <div className="text-wrapper-5">Living Room</div>

            <div className="overlap-group">
                <div className="ellipse" />

                <div className="text-wrapper-6">Appliance Name</div>
            </div>

            <div className="overlap">
                <div className="ellipse-2" />

                <div className="text-wrapper-7">Appliance Name</div>
            </div>

            <div className="overlap-2">
                <div className="ellipse-3" />

                <div className="text-wrapper-8">Appliance Name</div>
            </div>

            <div className="vector-wrapper">
                <img className="vector" alt="Vector" src={image} />
            </div>

            <div className="img-wrapper">
                <img className="img" alt="Vector" src={vector} />
            </div>

            <img
                className="iconamoon-edit-thin"
                alt="Iconamoon edit thin"
                src={iconamoonEditThin}
            />
        </div>
    );
};
