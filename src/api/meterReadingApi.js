const URL_API =
  'https://raw.githubusercontent.com/omgalbert/energy-data/master/src/data/meterReadingsSample.json';

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
