import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';

export default function Routing({ firebaseKey }){
    console.warn(firebaseKey);
    return (
        <div>
            <Routes>
            <Route 
            path="/" element={<Home firebaseKey={firebaseKey}/>}></Route>
            </Routes>
    
        </div>
    )
    
    
    }