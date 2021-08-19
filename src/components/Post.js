export default function Post({post}) {
  return (
    <div>
    <b>TITLE</b><br/> <i>{post.title}</i><br/>
    <b>BODY</b> <br/> {post.body};

    </div>
  );
}