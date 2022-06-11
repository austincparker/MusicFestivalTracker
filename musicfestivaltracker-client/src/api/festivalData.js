import axios from 'axios';

const baseURL = "https://localhost:7245/api";

const getFestivalsByUid = (userId) =>
    new Promise((resolve, reject) => {
        axios
          .get(`${baseURL}/festivals/uid/${userId}`)
          .then((response) => 
          {resolve(Object.values(response.data))
          console.warn(response.data);
    })
          .catch(reject)});

const createFestival = (newFest) =>
new Promise((resolve, reject) => {
      console.warn(newFest);
  axios
    .post(`${baseURL}/festivals`, newFest)
    .then((response) => {
      resolve(response.data.id);
    })
    .catch(reject);
});

const updateFestival = (festObj) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${baseURL}/festivals/${festObj.id}`, festObj)
      .then(() =>getFestivalsByUid(festObj.userId).then(resolve))
    
      .catch(reject);
  });

  const deleteFestival = (id, userId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}/festivals/${id}`)
      .then(() => getFestivalsByUid(userId).then(resolve))
      .catch(reject);
  });

  const getSingleFestival = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/festivals/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });


    export { getFestivalsByUid, createFestival, updateFestival, deleteFestival, getSingleFestival };