export default function User({user, history}) {
  const userDetail = () => {
    history.push( `/users/${user.id}`);
  };
  return (
    <div>
    Name - {user.name} <button onClick={userDetail}>user details</button>
    <hr/>
    </div>
  );
}