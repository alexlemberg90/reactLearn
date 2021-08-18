import CreateCar from "./CreateCar";
import Car from "./Car";
import {useEffect, useState} from "react";
import {getCar} from "../../services/car.service";

export default function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCar().then(value => setCars([...value]))
    },[])
  return (
    <div>
        <CreateCar/>
        {
            cars.map(car => <Car key={car.id} car={car}/>)
        }

    </div>
  );
}
