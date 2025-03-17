import React from "react";
import iconamoonEditThin from "./iconamoon-edit-thin.svg";
import image from "./image.svg";
import "./ProfileAndSettingsStyle1.css";
import vector from "./vector.svg";
import weuiArrowOutlined2 from "./weui-arrow-outlined-2.svg";
import weuiArrowOutlined3 from "./weui-arrow-outlined-3.svg";
import weuiArrowOutlined from "./weui-arrow-outlined.svg";

export const ProfileSettings = () => {
    return (
        <div className="profile-settings">
            <div className="overlap">
                <div className="ellipse" />

                <div className="div" />

                <img
                    className="iconamoon-edit-thin"
                    alt="Iconamoon edit thin"
                    src={iconamoonEditThin}
                />
            </div>

            <input className="name" placeholder="&amp;lt;Name&amp;gt;" type="text" />

            <div className="overlap-group">
                <div className="text-wrapper">Edit Profile</div>
            </div>

            <div className="text-wrapper-2">Privacy Policy</div>

            <div className="text-wrapper-3">Payment Method</div>

            <div className="text-wrapper-4">Settings</div>

            <div className="text-wrapper-5">Sign Out</div>

            <div className="ellipse-2" />

            <div className="ellipse-3" />

            <div className="ellipse-4" />

            <div className="ellipse-5" />

            <img
                className="weui-arrow-outlined"
                alt="Weui arrow outlined"
                src={weuiArrowOutlined}
            />

            <div className="overlap-2">
                <img
                    className="img"
                    alt="Weui arrow outlined"
                    src={weuiArrowOutlined3}
                />

                <div className="ellipse-6" />
            </div>

            <img
                className="weui-arrow-outlined-2"
                alt="Weui arrow outlined"
                src={image}
            />

            <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                    <img className="vector" alt="Vector" src={vector} />

                    <img
                        className="weui-arrow-outlined-3"
                        alt="Weui arrow outlined"
                        src={weuiArrowOutlined2}
                    />
                </div>
            </div>
        </div>
    );
};
