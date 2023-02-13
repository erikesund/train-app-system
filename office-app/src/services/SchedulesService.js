const baseURL = "http://localhost:9000/schedules"

export const getSchedules = () => {
  return fetch(baseURL)
    .then(res => res.json())
}