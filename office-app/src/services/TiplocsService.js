const baseURL = "http://localhost:9000/tiplocs"

export const getTiplocs = () => {
  return fetch(baseURL)
    .then(res => res.json())
}