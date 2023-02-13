const baseURL = "http://localhost:9000/drivers"

export const getDrivers = () => {
  return fetch(baseURL)
    .then(res => res.json())
}