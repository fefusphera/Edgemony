const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=a3e69b3b929b911d21793d43d1d96b7c";

const GET = async (type, movieID) => {
  const res = await fetch(BASE_URL + type + "/" + movieID + API_KEY);
  return await res.json();
};

export { GET };
