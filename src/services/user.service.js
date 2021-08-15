let URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
    return fetch(URL)
        .then(value => value.json());
}
const getUserPosts = (userId) => {
    return fetch(URL + '/' + userId + '/posts')
        .then(value => value.json());
}

export {getUsers, getUserPosts}