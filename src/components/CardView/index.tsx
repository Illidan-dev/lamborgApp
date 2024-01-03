import { Image, View } from "react-native";
import { useEffect, useState } from "react";

import { styles } from "./style";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";

import CardViewLogoChildren from "./childrens/logo";
import CardViewDetailChildren from "./childrens/detail";
import Divider from "../Divider";
import CardViewBuyButtonChildren from "./childrens/buyButton";
import CardViewPriceControlsChildren from "./childrens/PriceControls";
import { CarModel } from "./props";
import { loadCarData } from "./actions";




export default function CardView(){

    const [carIndex, setCarIndex]   = useState<number>(1);
    const [carData, setCarData]     = useState<CarModel | null>(null);

    const nextCar       = () => setCarIndex( (prev) => prev + 1 );
    const previousCar   = () => setCarIndex( (prev) => prev <= 1 ? 1 : prev - 1 );


    const handleErrorImage  = () => {
        alert(`Não foi possível renderizar a lamborghini ${carIndex}`);
        setCarIndex(1);
    }

    const renderCarImage = () => (
        <Image 
            style={styles.image}
            source={{ uri: CAR_ASSETS_BASE_URL(carIndex)}}
            onError={handleErrorImage}
        />
    )


    useEffect( () => {
        (async() => {
            loadCarData(carIndex, setCarData);
        })();
    }, [carIndex]);

    useEffect( () => {
        (async () => {
            loadCarData(carIndex, setCarData);
        })();
    }, []);

    return (
        <View style={styles.imageContainer}>


            <CardViewLogoChildren />

            <Divider />

            <CardViewDetailChildren carData={carData} />

            {renderCarImage()}


            <Divider />
            <CardViewBuyButtonChildren />
            <CardViewPriceControlsChildren next={nextCar} previous={previousCar} carData={carData} />
        </View>
    )
}