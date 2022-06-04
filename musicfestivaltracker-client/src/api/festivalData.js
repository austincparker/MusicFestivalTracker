import axios from 'axios';

const baseURL = "https://localhost:7245/api";

const getFestivalsByUid = (userId) =>
    new Promise((resolve, reject) => {
        axios
          .get(`${baseURL}/festivals/uid/${userId}`)
          .then((response) => 
          {resolve(Object.values(response.data))
          console.warn(response);
    })
          .catch(reject)});

    export default getFestivalsByUid;