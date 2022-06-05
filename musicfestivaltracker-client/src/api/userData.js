import axios from 'axios';

const baseURL = "https://localhost:7245/api";

const getUserByFirebaseKey = (firebaseKey) => new Promise((resolve, reject) => {
  axios
          .get(`${baseURL}/users/${firebaseKey}`)
          .then((response) => 
          {resolve(Object.values(response.data))
})
.catch(reject);
});

const createUser = (newUser) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/users`, newUser)
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });

  export { createUser, getUserByFirebaseKey };