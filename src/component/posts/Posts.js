import {useEffect, useState} from "react";
import {getPosts} from "../../services/placeholder.service";
import Post from "./Post";
import {Route} from "react-router-dom";
import PostDetail from "./PostDetail";
import '../../App.css';

export default function Posts(props) {
  const {history} = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(value => setPosts([...value]));
  },[]);

  return (
    <div className={'postName'}>

      {
        posts.map(post => <Post key={post.id} post={post} history={history}/>)
      }
      {
        <Route path={`/posts/:id`} render={(props) => {
          return <PostDetail {...props}/>
        }}/>
      }

    </div>
  );
}