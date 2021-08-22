import {useEffect, useState} from "react";
import {getUsers} from "../../services/placeholder.service";
import User from "./User";
import {Route} from "react-router-dom";
import UserDetails from "./UserDetails";

export default function Users(props) {

  const {match: {url}, history} = props;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => setUsers([...value]));
  },[]);

  return (
    <div>

      {
        users.map(user => <User key={user.id} user={user} history={history}/>)
      }

      {
        <Route path={`${url}/:id`} render={(props) => {
          return <UserDetails {...props}/>
        }}/>
      }

    </div>
  );
}