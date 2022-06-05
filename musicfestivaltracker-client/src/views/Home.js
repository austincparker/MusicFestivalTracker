import React, { useEffect, useState } from 'react'
import { signOutUser } from '../api/auth/auth';
import getFestivalsByUid from '../api/festivalData';

function Home({ firebaseKey }) {
  const [festivals, setFestivals] = useState([]);
  useEffect(() => {
    getFestivalsByUid(1).then((festArray) => {
        setFestivals(festArray);
      });
}, []);
  return (
      <>
      <div>Home</div>
      <p>{firebaseKey}</p>
      {festivals.map((fest) => (
        <>
        <p key={fest.id}>{fest.name}</p>
        <button
        onClick={signOutUser}
        type='button'
        >Sign Out</button>
        </>
      ))}
      
      </>
  )
}

export default Home