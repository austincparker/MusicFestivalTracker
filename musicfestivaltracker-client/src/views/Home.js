import React, { useEffect, useState } from 'react'
import { signOutUser } from '../api/auth/auth';
import { getFestivalsByUid } from '../api/festivalData';
import { getUserByUid } from '../api/userData';
import FestivalCard from '../components/FestivalCard';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Home({ firebaseKey }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    getUserByUid(firebaseKey).then((userObj) => {
   getFestivalsByUid(userObj.id).then((festArray) => {
        setFestivals(festArray);
        setUser(userObj)
      });   
    })
}, []);
  return (
      <div>
      <div>Home</div>
      <p>Welcome, {user.fullName}</p>
      <button
        className="btn btn-danger"
        onClick={signOutUser}
        type='button'
        >Sign Out</button>
      <h3>Here are your festivals!!</h3>
      {festivals.map((fest) => (
       <FestivalCard festival={fest} key={fest.id}/>
      ))};
      <button
      className="btn btn-success"
      type="button"
      onClick={() => navigate('/create')}
      >Add Festival</button>
      </div>
  )
}

Home.defaultProps = {
  firebaseKey: '',
}

Home.propTypes = {
  festival: PropTypes.string,
}

export default Home