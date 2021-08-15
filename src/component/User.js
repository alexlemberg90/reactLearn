export default function User({user, showUserPosts}) {

  const userPosts = () => {
    showUserPosts(user.id)
  };

  return (
    <div>
      User Id: {user.id};<br/>
      User Name: {user.name};<br/>
      <button onClick={userPosts}>User Posts</button>
        <hr/>
    </div>
  );
}