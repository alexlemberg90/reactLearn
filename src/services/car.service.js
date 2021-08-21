const baseURL = 'http://91.201.233.14/api/v1/cars';

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
const editCar = (car) => {
  fetch('http://195.72.146.25/api/v1/cars/'+ car.id, {
    method: 'PUT',
    body: JSON.stringify(car),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
      .then((response) => response.json())
      .then((json) => console.log(json));
}
const getCar = () => {
   return fetch(baseURL)
            .then(value => value.json())
}
export {saveCar, getCar, editCar}