import React from "react";
import Button from '@mui/material/Button';
import { useEthers, useEtherBalance } from "@usedapp/core";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    const navigate = useNavigate();

    async function handleConnectWallet() {
        try {
            activateBrowserWallet();

            if (account) {
                
    console.log(etherBalance, account)
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('user-token', account);
                setTimeout(() => {
                    navigate('/home');
                }, 500);
            }
        } catch (error) {
            localStorage.removeItem('user-token');
            localStorage.removeItem('isLoggedIn');
        }
    }

    return (
        <React.Fragment>
            <div className="login-view">
                <h2 className="title">Connect to Metamask Wallet</h2>
                <Button onClick={handleConnectWallet} variant="contained" className="button-primary">Connect</Button>
            </div>
        </React.Fragment>
    )
}

export default LoginView;