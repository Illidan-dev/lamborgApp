import React from "react";
import { fetchGetCarData } from "../../api/getCars"
import { CarModel } from "./props";

// Fazer uma solicitação para API
export const loadCarData = async (carIndex: number, setData: React.Dispatch<React.SetStateAction<CarModel | null>> ) => {

    try{
        const result = await fetchGetCarData(carIndex);
        setData(result ?? null);

    }catch(err){
        console.log("erro ao buscar carData", err);
        setData(null);
    }

}


export const handlePreviousCar = async () => {
    
}

export const handleNextCar = async () => {
    
}