import { CAR_API_BASE_URL } from "../constants/car";
import { CarModel } from "../components/CardView/props";

import axios from "axios";


interface CarsResponseResult {
    cars: CarModel[]
}


export const fetchGetCarData = async (idCar: number) =>{

    try{    
        const response = await axios.get<CarsResponseResult>(CAR_API_BASE_URL);

        const {cars}    = response.data;

        const carData  = cars.find( ({id}) => +(id) === +(idCar) ) || null;

        return carData;

    }catch(err){
        console.log('error!');
        console.log(err);
    }
}