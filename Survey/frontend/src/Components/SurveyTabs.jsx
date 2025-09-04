import React, { useState } from "react";
import Home from "./Home";
import Preview from "./Preview";
import Json from "./Json";


const SurveyTabs = () => {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div>

            {/* <div className="tabs flex gap-4 p-4 border-b bg-gray-800"> */}
            <div className="tabs fixed top-0 left-0 right-0 z-50 flex gap-4 p-4 border-b bg-gray-800">
                <button
                    className={`px-4 py-2 text-white ${activeTab === "home"

                        }`}
                    onClick={() => setActiveTab("home")}
                >
                    Designer
                </button>
                <button
                    className={`px-4 py-2 text-white ${activeTab === "preview"

                        }`}
                    onClick={() => setActiveTab("preview")}
                >
                    Preview
                </button>
                <button
                    className={`px-4 py-2  text-white ${activeTab === "json"

                        }`}
                    onClick={() => setActiveTab("json")}
                >
                    JSON Editor
                </button>
            </div>
            <div className="survey-tabs-container min-h-screen flex flex-col ">


                {/* Tab content */}
                <div className="tab-content flex-1 p-4">
                    {activeTab === "home" && <Home />}
                    {activeTab === "preview" && <Preview />}
                    {activeTab === "json" && <Json />}
                </div>
            </div>
        </div>
    );
};

export default SurveyTabs;
