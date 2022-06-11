import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleFestival } from '../api/festivalData';
import FestivalForm from '../components/FestivalForm'

function EditFesival() {
  const [editFestival, setEditFestival] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleFestival(key).then(setEditFestival);
  }, []);

  return (
    <>
    <div>EditFesival</div>
    <FestivalForm obj={editFestival} />
    </>
  )
}

export default EditFesival