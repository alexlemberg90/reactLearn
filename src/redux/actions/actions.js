import {CLEAR_STORE, GET_USERS, SAVE_USER} from "./actionTypes";

const getUsers = (value) => {
  return {type: GET_USERS, payload: value}
};
const saveUser = (value) => {
  return  {type:SAVE_USER, payload: value}
};
const clearStore = () => {
  return {type:CLEAR_STORE}
}


export {getUsers, saveUser, clearStore}