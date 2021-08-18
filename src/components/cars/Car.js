export default function Car({car}) {
  return (
    <div>
      Car ID - {car.id};<br/>
      Model - {car.model};<br/>
      Price - {car.price};<br/>
      Year - {car.year}<hr/>

    </div>
  );
}