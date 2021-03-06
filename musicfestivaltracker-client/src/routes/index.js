import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import PropTypes from 'prop-types';
import CreateFestival from '../views/CreateFestival';
import EditFesival from '../views/EditFesival';
import FestivalDetails from '../views/FestivalDetails';

export default function Routing({ firebaseKey }){
    return (
        <div>
            <Routes>
            <Route 
            path="/" element={<Home firebaseKey={firebaseKey}/>}></Route>
            <Route 
            path="/create" element={<CreateFestival />}></Route>
            <Route
            path="/edit/:key" element={ <EditFesival />}></Route>
            <Route
            path="/details/:key" element={ <FestivalDetails />}></Route>
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

    