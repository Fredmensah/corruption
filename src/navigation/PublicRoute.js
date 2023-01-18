import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = (props) => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const checkUserToken = () => {
    //     const userToken = localStorage.getItem('user-token');
    //     if (userToken || userToken !== 'undefined') {
    //         setIsLoggedIn(true);
    //         return navigate('/home');
    //     }
    //     setIsLoggedIn(false);
    // }

    // useEffect(() => {
    //     checkUserToken();
    // }, [isLoggedIn]);

    return (
        <React.Fragment>
            {
                !isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}

export default PublicRoute;