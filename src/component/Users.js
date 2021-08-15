import {useEffect, useState} from "react";
import {getUserPosts, getUsers} from "../services/user.service";
import User from "./User";
import Post from "./Post";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    });

    const showUserPosts = (userId) => {
        getUserPosts(userId).then(value => setPosts([...value]));
    };

  return (
    <div>
        {
            users.map(user => <User key={user.id} user={user} showUserPosts={showUserPosts}/>)
        }
    {

        posts && posts.map(post => <Post key={post.id} post={post}/>)
    }
    </div>
  );
}