const baseURL = "http://localhost:9000/drivers/"

export const getDrivers = () => {
  return fetch(baseURL)
    .then(res => res.json())
};

export const postDriver = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-Type": "application/json"}
  })
  .then(res => res.json())
};

export const deleteDriver = (id) => {
  return fetch(baseURL + id, {
      method: "DELETE"
  });
};