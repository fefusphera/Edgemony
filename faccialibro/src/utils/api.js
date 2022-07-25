const BASE_URL = "https://edgemony-backend.herokuapp.com/";

const POST = async (path, body) => {
  const res = await fetch(BASE_URL + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

const GET = async (path) => {
  const res = await fetch(BASE_URL + path);

  return await res.json();
};

const DELETE = async (BASE_URL, id) => {
  return await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { POST, GET, DELETE };
