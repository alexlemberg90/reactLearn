import '../App.css';

export default function User({user}) {
  return (
    <div>
        ID - {user.id}<br/>
        Name - {user.name}<br/>
        Email - {user.email}

    </div>
  );
}