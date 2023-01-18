import React, { useEffect, useState } from "react";
import { DAppProvider } from "@usedapp/core";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import AppLayout from "./components/layout/Layout";
import LoginView from "./views/login/LoginView";
import ProtectedRoute from "./navigation/ProtectedRoute";
import HomeView from "./views/home/HomeView";
import PublicRoute from "./navigation/PublicRoute";
import OwnerHomeView from "./views/owner/OwnerHomeView";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

  return (
    <DAppProvider config={{}}>
      <BrowserRouter basename={'/'}>
				<Routes>
          <Route path='/' element={<AppLayout />}>
						<Route path='/' element={
                <PublicRoute>
                  <LoginView />
                </PublicRoute>
              } 
            />
					</Route>
          <Route path='/' element={<AppLayout />}>
						<Route path='/home' element={
                <ProtectedRoute>
                  <HomeView/>
                </ProtectedRoute>
              }
            />
					</Route>
          <Route path='' element={<AppLayout />}>
						<Route path='/home/owner' element={
                <ProtectedRoute>
                  <OwnerHomeView/>
                </ProtectedRoute>
              }
            />
					</Route>
        </Routes>
      </BrowserRouter>
    </DAppProvider>
  );
}

export default App;
