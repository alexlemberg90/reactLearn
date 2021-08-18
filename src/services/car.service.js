const baseURL = 'http://195.72.146.25/api/v1/cars';

const saveCar = (car) => {
  fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(car),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
      .then(value => value.json())
      .then(value => console.log(value));
}
const getCar = () => {
   return fetch(baseURL)
            .then(value => value.json())
}
export {saveCar, getCar}