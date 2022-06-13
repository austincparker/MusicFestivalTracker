import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleFestival } from "../api/festivalData";

function FestivalDetailsCard() {
  const [festival, setFestival] = useState({});
  const navigate = useNavigate();
  const { key } = useParams();

  const handleClick = () => {
    navigate(`/`);
  };

  useEffect(() => {
    getSingleFestival(key).then(setFestival);
  }, []);

  return (
    <div className="bfestival bfestival-3 text-center">
      <h1 className="display-5">{festival.name}</h1>
      <h2>{festival.headliner}</h2>
      <h4>{festival.location}</h4>
      <h5>{festival.date}</h5>
      <p>What you liked: {festival.liked}</p>
      <p>What you disliked: {festival.lacked}</p>
      <p>Camping: {festival.camping ? 'Yes' : 'No'}</p>
      <img width="200px" alt={festival.name} src={festival.imageUrl}></img>



      <div className="text-center">
      <button
      type="button"
      onClick={() => handleClick()}
      className="btn btn-light mx-2 my-2"
      ></button>
      </div>
    </div>
  );
}

export default FestivalDetailsCard;

FestivalDetailsCard.defaultProps = {
  festival: {},
};

FestivalDetailsCard.propTypes = {
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
  }),
};
