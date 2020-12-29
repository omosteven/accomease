const axios = require("axios").default;

const useRegisterApi = dataObject => {
  // https://ifamlmapis.herokuapp.com/auth/signup/
  const urlLink = "https://ifamlmapis.herokuapp.com/auth/signup/";
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

export default useRegisterApi;
