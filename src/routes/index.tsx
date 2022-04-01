import React from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';

import LoginPage from "./LoginPage";


const AppRoutes = () => {

    const Home = () => {
        const navigate = useNavigate();

        return (<h1 onClick={() => navigate("/login", {replace: true})}>Home Page</h1>);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
