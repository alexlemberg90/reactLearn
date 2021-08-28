import CreateCar from "./CreateCar";
import Car from "./Car";
import {useEffect, useState} from "react";
import {getCar} from "../../services/car.service";

export default function Cars() {

    const [cars, setCars] = useState([]);
    let [oneCar, setOneCars] = useState({});

    useEffect(() => {
        getCar().then(value => setCars([...value]))

    },[cars])

    const edit = (car) => {
        setOneCars(car)
    }

    return (
    <div>
        <CreateCar oneCar={oneCar}/>
        {
            cars.map(car => <Car key={car.id} car={car} edit={edit}/>)
        }

    </div>
  );
}