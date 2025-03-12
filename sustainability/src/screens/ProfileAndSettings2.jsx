import React from "react";
import iconamoonEditThin from "./iconamoon-edit-thin.svg";
import "./ProfileAndSettingsStyle2.css";
import weuiArrowOutlined from "./weui-arrow-outlined.svg";

export const ProfileSettings = () => {
    return (
        <div className="profile-settings">
            <div className="overlap-group">
                <div className="ellipse" />

                <div className="div" />

                <img
                    className="iconamoon-edit-thin"
                    alt="Iconamoon edit thin"
                    src={iconamoonEditThin}
                />
            </div>

            <div className="overlap">
                <img
                    className="weui-arrow-outlined"
                    alt="Weui arrow outlined"
                    src={weuiArrowOutlined}
                />

                <div className="ellipse-2" />
            </div>
        </div>
    );
};
