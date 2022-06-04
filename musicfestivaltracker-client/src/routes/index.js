import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';

export default function Routing({ uid }){
    return (
        <div>
            <Routes>
            <Route 
// @ts-ignore
            exact path="/" element={<Home uid={uid}/>}></Route>
            </Routes>
    
        </div>
    )
    
    
    }