import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';

export default function Routing(){
    return (
        <div>
            <Routes>
            <Route 
// @ts-ignore
            exact path="/" element={<Home />}></Route>
            </Routes>
    
        </div>
    )
    
    
    }