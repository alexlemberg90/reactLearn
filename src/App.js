
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./component/users/Users";
import Posts from "./component/posts/Posts";

function App() {
  return (
      <Router>
        <div>

            <Link to={'/users'}>users</Link><br/>
            <Link to={'/posts'}>posts</Link>

            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>

        </div>
      </Router>

  );
}

export default App;

// Є дві лінки
// /users
// /posts
//
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
// Отримує posts з jsobplaceholder, виводить їх всі.
//     Біля кожного поста зробити лінку (не конопку) яка буде вести на детальну інформацію поста. Детальну інформацію отримувати через history.state
