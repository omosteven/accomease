const userToken = () => {
  return sessionStorage.getItem("IFAMLMLTOKEN");
};

export default userToken;
