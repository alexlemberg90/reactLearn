export default function Post({post}) {
  return (
    <div>
        User Id: {post.userId};<br/>
        Post Id: {post.id};<br/>
        Title: {post.title};<br/>
        Body: {post.body}<hr/>

    </div>
  );
}