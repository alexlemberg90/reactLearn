import './App.css';
import Users from "./components/users/Users";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {AddUser, GetUsers} from "./services/user.service";
import {clearStore, getUsers, saveUser} from "./redux/actions";

function App() {
    const {users} = useSelector(state => state);

    const dispatch = useDispatch()

    useEffect(() => {
        GetUsers().then(value => dispatch(getUsers(value)))
    },[dispatch]);

    const onSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const user = {name};
      AddUser(user).then(value => dispatch(saveUser(value)))
    };

    const clearState = () => {
      dispatch(clearStore())
    };

    const addState = () => {
        GetUsers().then(value => dispatch(getUsers(value)))
    };

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type={'text'} name={'name'}/>
            <button>add user</button>
        </form>
        <hr/>
        <button onClick={clearState}>clear users</button>
        <button onClick={addState}>add users</button>
        <hr/>
        {
            users.map(user => <Users key={user.id} user={user}/> )
        }
    </div>
  );
}

export default App;
