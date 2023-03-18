
const baseURL = "http://localhost:9000/schedules"

export const getSchedules = () => {
  return fetch(baseURL)
    .then(res => res.json())
}

async function getPermSchedulesOrigin (schedulesCollection) {
  //maybe need to require mongodb?
  const origins = []
  const query = {"JsonScheduleV1.CIF_stp_indicator": "P"};
  const permSchedules = await filterSchedules();
  origins = await filterOrigins();

  function filterSchedules() {
    schedulesCollection.find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);

    console.log(origins)
      // db.close(); this crashed nodemon
    });
  }

  function filterOrigins() {
    origins = result.filter(schedule => {
      const isDuplicate = result.includes(schedule.JsonScheduleV1.schedule_location.tiploc_code)
      if (!isDuplicate) {
        origins.push(schedule.JsonScheduleV1.schedule_location.tiploc_code)
      }
    })
  }
  
  return "Yes"
}