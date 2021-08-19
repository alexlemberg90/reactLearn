import {useEffect, useState} from "react";
import {getPosts} from "../services/post.service";
import Post from "./Post";

export default function Posts() {

  let [posts, setPost] = useState([]);

  useEffect(() => {
    getPosts().then(value => setPost([...value]));
  },[]);

  return (
    <div>
      {
        posts.map(post => <Post key={post.id} post={post}/>)
      }
    </div>
  );
}