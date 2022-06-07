import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import PropTypes from 'prop-types';

export default function Routing({ firebaseKey }){
    return (
        <div>
            <Routes>
            <Route 
            path="/" element={<Home firebaseKey={firebaseKey}/>}></Route>
            </Routes>
        </div>
    );
};

Routing.defaultProps = {
    firebaseKey: '',
  }
  
  Routing.propTypes = {
    festival: PropTypes.string,
  }

    