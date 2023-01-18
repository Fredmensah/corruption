import React from "react";
import { useNavigate } from "react-router-dom";
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from "@ethersproject/units";

const HeaderNavbar = () => {
    const { activateBrowserWallet, deactivate, account } = useEthers()
    const etherBalance = useEtherBalance(localStorage.getItem('user-token'));
    //console.log(etherBalance, localStorage.getItem('user-token'))
    const navigate = useNavigate();

    const logout = async() => {
        await deactivate();
        localStorage.clear();
        navigate('/auth/login');
    }

    return (
        <React.Fragment>
            
        </React.Fragment>
    );
}

export default HeaderNavbar;