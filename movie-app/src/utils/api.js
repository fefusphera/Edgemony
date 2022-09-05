const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=a3e69b3b929b911d21793d43d1d96b7c";

const GET = async (type, specific, ext = "") => {
  const res = await fetch(BASE_URL + type + "/" + specific + API_KEY + ext);
  return await res.json();
};

export { GET };
