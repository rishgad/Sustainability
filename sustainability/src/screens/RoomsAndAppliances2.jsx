import React from "react";
import codiconError from "./codicon-error.svg";
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
                <div className="rectangle" />

                <div className="rectangle-2" />

                <div className="rectangle-3" />

                <div className="rectangle-4" />

                <div className="ellipse" />

                <div className="ellipse-2" />

                <div className="ellipse-3" />

                <div className="text-wrapper-6">Appliance Name</div>

                <div className="text-wrapper-7">Appliance Name</div>

                <div className="text-wrapper-8">Appliance Name</div>

                <img className="vector" alt="Vector" src={image} />

                <div className="rectangle-5" />

                <img className="codicon-error" alt="Codicon error" src={codiconError} />

                <div className="rectangle-6" />

                <div className="rectangle-7" />

                <div className="rectangle-8" />

                <div className="rectangle-9" />

                <div className="text-wrapper-9">Price</div>

                <div className="rectangle-7" />

                <div className="rectangle-10" />

                <div className="text-wrapper-10">Your Usage</div>

                <div className="text-wrapper-11">Recommended Appliance Name</div>

                <div className="text-wrapper-12">Price</div>

                <div className="text-wrapper-13">Price</div>

                <div className="text-wrapper-14">Appliance Stats</div>

                <div className="text-wrapper-15">Appliance Stats</div>

                <div className="text-wrapper-16">Appliance Stats</div>

                <div className="text-wrapper-17">Recommended Appliance Name</div>

                <div className="text-wrapper-18">Recommended Appliance Name</div>

                <div className="text-wrapper-19">Recommendations</div>

                <div className="text-wrapper-20">Average Usage</div>

                <div className="ellipse-4" />

                <div className="ellipse-5" />

                <div className="ellipse-6" />
            </div>

            <div className="overlap">
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
