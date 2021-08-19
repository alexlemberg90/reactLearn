export default function Comment({comment}) {
  return (
    <div>
      <b>EMAIL</b><br/>
      {comment.email}<br/>
    <b>Body</b> - {comment.body};<br/>

    </div>
  );
}