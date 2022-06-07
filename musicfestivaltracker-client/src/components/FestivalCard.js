import React from 'react';
import PropTypes from 'prop-types';


function FestivalCard({ festival }) {
  return (
    <div className="border border-3">
    <h1 className="display-5">{festival.name}</h1>
    <h2>{festival.headliner}</h2>
    </div>
  )
}

export default FestivalCard

FestivalCard.defaultProps = {
  festival: {}
}

FestivalCard.propTypes = {
  festival: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    headliner: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    liked: PropTypes.string,
    lacked: PropTypes.string,
    camping: PropTypes.bool,
    imageUrl: PropTypes.string,
  })
}