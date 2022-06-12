import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { deleteFestival, getFestivalsByUid } from "../api/festivalData";

function FestivalCard({ festival, setFestivals, user }) {
  const uid = user.id;
  const fid = festival.id;
  const navigate = useNavigate();
  const handleClick = (method) => {
    if (method === "delete") {
      deleteFestival(fid, uid).then(() => {
        getFestivalsByUid(uid).then(setFestivals);
      });
    } else if (method === "edit") {
      navigate(`/edit/${festival.id}`);
    } else if (method === "details") {
      navigate(`/details/${festival.id}`);
    }
  };

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
          onClick={() => handleClick("details")}
          className="btn btn-info mx-2 my-2"
        >
          Festival Details
        </button>
        <button
          type="button"
          onClick={() => handleClick("edit")}
          className="btn btn-dark mx-2 my-2"
        >
          Update Festival
        </button>
        <button
          type="button"
          onClick={() => handleClick("delete")}
          className="btn btn-danger mx-2 my-2"
        >
          Delete Festival
        </button>
      </div>
    </div>
  );
}

export default FestivalCard;

FestivalCard.defaultProps = {
  festival: {},
};

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
  }),
};
