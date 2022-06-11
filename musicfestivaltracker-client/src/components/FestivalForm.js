import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getCurrentUsersUid from "../helpers/helpers";
import { useNavigate } from "react-router-dom";

import "bootstrap/js/src/collapse";
import { createFestival, updateFestival } from "../api/festivalData";
import { getUserByUid } from "../api/userData";

const initialState = {
  name: "",
  headliner: "",
  date: "",
  liked: "",
  lacked: "",
  camping: false,
  userId: 0,
  imageUrl: "",
};
function FestivalForm({ obj = {} }) {
  const [checked, setChecked] = useState(false);
  const [formInput, setFormInput] = useState(initialState);
  const navigate = useNavigate();
  const uid = getCurrentUsersUid();

  useEffect(() => {
    if (obj.id) {
      setFormInput({
        id: obj.id,
        name: obj.name,
        userId: obj.userId,
        headliner: obj.headliner,
        location: obj.location,
        date: obj.date,
        liked: obj.liked,
        lacked: obj.lacked,
        camping: obj.camping,
        imageUrl: obj.imageUrl,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const handleCheck = (e) => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (obj.id) {
      console.log(formInput);
      updateFestival(formInput).then(() => {
        navigate(`/`);
      });
    } else {
      getUserByUid(uid).then((user) => {
        createFestival({
          ...formInput,
          userId: user.id,
          camping: checked
        }).then(() => {
          resetForm();
          navigate(`/`);
        });
      });
    }
  };

  return (
    <>
      <div>FestivalForm</div>
      <form onSubmit={handleClick}>
        <div className="form-group">
          <label htmlFor="name">Festival Name</label>

          <input
            type="text"
            className="form-control"
            value={formInput.name || ""}
            placeholder="What was the festival named?"
            onChange={(e) => handleChange(e)}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="headliner">Headliner</label>

          <input
            type="text"
            className="form-control"
            value={formInput.headliner || ""}
            placeholder="Who headlined the festival?"
            onChange={(e) => handleChange(e)}
            name="headliner"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>

          <input
            type="text"
            className="form-control"
            value={formInput.location || ""}
            placeholder="Where was the festival held?"
            onChange={(e) => handleChange(e)}
            name="location"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>

          <input
            type="text"
            className="form-control"
            value={formInput.date || ""}
            placeholder="When did the festival happen?"
            onChange={(e) => handleChange(e)}
            name="date"
          />
        </div>

        <div className="form-group">
          <label htmlFor="liked">Liked</label>

          <input
            type="text"
            className="form-control"
            value={formInput.liked || ""}
            placeholder="What did you like about the festival?"
            onChange={(e) => handleChange(e)}
            name="liked"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lacked">Lacked</label>

          <input
            type="text"
            className="form-control"
            value={formInput.lacked || ""}
            placeholder="What did you dislike about the festival?"
            onChange={(e) => handleChange(e)}
            name="lacked"
          />
        </div>

        <label className="form-check-label" htmlFor="camping">
          Was it a camping festival?
        </label>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={obj.camping}
            onChange={(e) => handleCheck(e)}
            name="camping"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {obj.id ? "Update Festival" : "Add Festival!"}
        </button>
      </form>
    </>
  );
}

export default FestivalForm;

FestivalForm.propTypes = {
  obj: PropTypes.shape({}),
};
FestivalForm.defaultProps = { obj: {} };
