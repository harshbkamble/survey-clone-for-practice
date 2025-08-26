import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Home from "./Home";
import Preview from "./Preview";
import Layout from "./Layout";
import Json from "./Json";


export default function Router() {
    return (
        <Routes>
            {/* Parent route renders Layout (Navbar + Sidebar) and <Outlet/> */}
            <Route path="/" element={<Layout />}>
                {/* child routes render inside <Outlet/> */}
                <Route index element={<Home />} />
                
                <Route path="preview" element={<Preview />} />
                <Route path="json" element={<Json />} />


               
            </Route>
        </Routes>
    );
}

