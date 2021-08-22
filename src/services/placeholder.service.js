const baseUrl = 'https://jsonplaceholder.typicode.com/'

const getUsers = () => {
    return fetch(baseUrl + 'users')
        .then(value => value.json())
}
const getUser = (id) => {
  return fetch(baseUrl + 'users/' + id)
      .then(value => value.json())
}

const getPosts = () => {
  return fetch(baseUrl + 'posts')
      .then(value => value.json())
}

export {getUsers, getPosts, getUser}