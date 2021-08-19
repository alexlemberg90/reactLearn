import {useEffect, useState} from "react";
import {getComments} from "../services/comment.service";
import Comment from "./Comment";

export default function Comments() {

  let [comments, setComments] = useState([])

  useEffect(() => {
    getComments().then(value => setComments([...value]))
  },[])

  return (
    <div>
      {
        comments.map(comment => <Comment key={comment.id} comment={comment}/>)
      }
    </div>
  );
}