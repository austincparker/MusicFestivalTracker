import axios from 'axios';

const baseURL = "https://localhost:7245/api";

const createUser = (newUser) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/user`, newUser)
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });

  export default createUser;