export default function Car({car, edit}) {

    const editOneCar = () => {
        edit(car)
    };
  return (

    <div>
      Car ID - {car.id};<br/>
      Model - {car.model};<br/>
      Price - {car.price};<br/>
      Year - {car.year}<br/>
        <button>Delete</button>
        <button onClick={editOneCar}>Edit</button>

    </div>
  );
}