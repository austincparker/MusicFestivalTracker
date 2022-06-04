import React, { useEffect, useState } from 'react'
import getFestivalsByUid from '../api/festivalData';

function Home() {
  const [festivals, setFestivals] = useState([]);
  useEffect(() => {
    // @ts-ignore
    getFestivalsByUid(1).then((array) => {
        setFestivals(array);
    });
}, [festivals]);
  return (
      <>
      <div>Home</div>
      {festivals[0].name}
      </>
  )
}

export default Home