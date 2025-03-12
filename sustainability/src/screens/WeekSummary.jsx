import React from "react";
import rectangle37 from "./rectangle-37.svg";
import riArrowDropDownLine from "./ri-arrow-drop-down-line.svg";
import "./WeeksSummaryStyle.css";

export const WeeksSummary = () => {
    return (
        <div className="weeks-summary">
            <div className="overlap">
                <div className="text-wrapper">This Week</div>

                <img
                    className="ri-arrow-drop-down"
                    alt="Ri arrow drop down"
                    src={riArrowDropDownLine}
                />
            </div>

            <div className="overlap-group">
                <div className="rectangle" />

                <div className="div" />

                <img className="img" alt="Rectangle" src={rectangle37} />

                <div className="text-wrapper-2">Latest Activity</div>
            </div>

            <div className="overlap-group-2">
                <div className="rectangle-2" />

                <div className="rectangle-3" />

                <div className="rectangle-4" />

                <div className="rectangle-5" />

                <div className="rectangle-6" />

                <div className="rectangle-7" />

                <div className="rectangle-8" />

                <div className="rectangle-9" />

                <div className="rectangle-10" />

                <div className="rectangle-11" />

                <div className="rectangle-11" />

                <div className="rectangle-12" />

                <div className="rectangle-13" />

                <div className="rectangle-14" />

                <div className="rectangle-15" />

                <div className="rectangle-16" />

                <div className="text-wrapper-3">Sun</div>

                <div className="text-wrapper-4">Mon</div>

                <div className="text-wrapper-5">Tue</div>

                <div className="text-wrapper-6">Wed</div>

                <div className="text-wrapper-7">Sat</div>

                <div className="text-wrapper-8">Thur</div>

                <div className="text-wrapper-9">Fri</div>
            </div>
        </div>
    );
};
