const BaseUrl = 'https://jsonplaceholder.typicode.com/users';

const GetUsers = () => {
  return fetch(BaseUrl)
      .then(value => value.json())
};
const AddUser = (user) => {
  return fetch(BaseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user)
  }).then(value => value.json())
}

export {GetUsers, AddUser};