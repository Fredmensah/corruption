import React from "react";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";

const AppLayout = () => {
    return (
        <React.Fragment>
            <div className="app">
                <div className="layout">

                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
}

export default AppLayout;