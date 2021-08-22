import {Link} from "react-router-dom";
import '../../App.css'

export default function Post({post}) {

  return (
    <div className={'post'}>
    Title: {post.title} -

      <Link to={{pathname:`/posts/${post.id}`, state: post}}>Details</Link>
      <hr/>

    </div>
  );
}