import React from 'react';
import LandingHome from './component/LandingHome';
import { BrowserRouter } from "react-router-dom";
import "./App.css"



function App() {
    return (
        <>
                <BrowserRouter>
                        <LandingHome/>
                </BrowserRouter>    
        </>
    )
}

export default App

