import React from "react";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
	const navigate = useNavigate();

    const navigateScreen = (screen) => {
		navigate(screen);
	}

    return (
        <React.Fragment>
            <div className="home-view">
                <div onClick={() => navigateScreen('owner')} className='role-box'>Owner</div>
                <div onClick={() => navigateScreen('')} className='role-box'>Auditor</div>
                <div onClick={() => navigateScreen('')} className='role-box'>Contractor</div>
            </div>
        </React.Fragment>
    )
}

export default HomeView;