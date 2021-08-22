import {useEffect, useState} from "react";
import {getUser} from "../../services/placeholder.service";

export default function UserDetails(props) {

  const {match:{params:{id}}} = props;

  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id).then(value => setUser({...value}))
  },[id])

  return (
    <div>
      {JSON.stringify(user)}

    </div>
  );
}