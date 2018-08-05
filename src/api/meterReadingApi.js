const URL_API =
  "https://storage.googleapis.com/bulb-interview/meterReadingsReal.json";

export function getMeterReadingApi() {
  return fetch(URL_API)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.electricity;
    })
    .catch(error => {
      console.error(error);
    });
}
