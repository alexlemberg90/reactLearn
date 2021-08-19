import './App.css';
import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
  return (
      <Router>
        <div>
            <Link to={'/users'}> All Users</Link><br/>
            <Link to={'/posts'}> All Posts</Link><br/>
            <Link to={'/comments'}> All Comments</Link>

            <Route path={'/users'} render={() => <Users/>}/>
            <Route path={'/posts'} render={() => <Posts/>}/>
            <Route path={'/comments'} render={() => <Comments/>}/>
        </div>
      </Router>
);
}

export default App;
