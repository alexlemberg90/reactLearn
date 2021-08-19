import {useEffect, useState} from "react";
import {getUsers} from "../services/user.service";
import User from "./User";

export default function Users() {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => setUsers([...value]))
  },[])
  console.log(users)
  return (
    <div>
      {
        users.map(user => <User key={user.id} user={user}/>)
      }
    </div>
  );
}