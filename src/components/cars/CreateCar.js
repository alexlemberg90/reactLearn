import {useState} from "react";
import {getCar, saveCar} from "../../services/car.service";

export default function CreateCar() {

    let [car, setCars] = useState({model:'', price:'', year:''})

    let onCarsChange = (e) => {
        setCars({...car, [e.target.name]: e.target.value});
    };

    let add = (e) => {
        e.preventDefault();
        saveCar(car)
    }
    getCar()

  return (
    <div>
        <form onSubmit={add}>
          <input type="text" name={'model'} value={car.model} onChange={onCarsChange} maxLength={20}/>
          <input type="number" name={'price'} value={car.price} onChange={onCarsChange} min={0}/>
          <input type="number" name={'year'} value={car.year} onChange={onCarsChange} min={1990} max={2021}/>
            <button>Save Car</button>
        </form>

    </div>
  );
}