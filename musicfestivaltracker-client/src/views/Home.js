import React, { useEffect, useState } from 'react'
import { signOutUser } from '../api/auth/auth';
import getFestivalsByUid from '../api/festivalData';

function Home({ uid }) {
  const [festivals, setFestivals] = useState([]);
  useEffect(() => {
    console.warn(uid);
    getFestivalsByUid(1).then((festArray) => {
        setFestivals(festArray);
      });
      console.warn(festivals)
}, []);
  return (
      <>
      <div>Home</div>
      <p>{uid}</p>
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