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
    }
  };

  return (
    <div className="bfestival bfestival-3">
      <h1 className="display-5">{festival.name}</h1>
      <h2>{festival.headliner}</h2>
      <div>
        <button
          type="button"
          onClick={() => handleClick("edit")}
          className="btn btn-info"
        >
          Update Festival
        </button>
        <button
          type="button"
          onClick={() => handleClick("delete")}
          className="btn btn-danger"
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
