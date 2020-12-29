const axios = require("axios").default;

const useLoginApi = dataObject => {
  const urlLink = "https://ifamlmapis.herokuapp.com/auth/login";
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",

      url: urlLink,

      data: dataObject
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        resolve(error.response.data);
      });
  });
};

export default useLoginApi;
