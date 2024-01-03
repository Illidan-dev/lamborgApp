

import { Button, Text, View } from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { CarModel } from "../../props";

interface PriceControlsProps {
    next: () => void;
    previous: () => void;
    carData: CarModel | null
}

export default function CardViewPriceControlsChildren({next, previous, carData}: PriceControlsProps){

    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(false);

    const pauseButtons = async (condition: boolean = true) => {
        setDisabled1(condition);
        setDisabled2(condition);

        
        if( !condition ) return;

        return new Promise( (resolve, reject) =>{
            setTimeout( () => {
                pauseButtons(false);
                resolve(true);
            }, 100)

        });
    }

    const goNext = () => {
        next();
    }

    const goPrevious = ()  => {
        previous();
    }


    useEffect(() => {

        (async () => {

            await pauseButtons();

            const the_id = +(carData?.id || 0);
            
            if( the_id <= 1 ){
                setDisabled2(true);
            }
    
            if( the_id == 10 ){
                setDisabled1(true);
            }

        })();

    }, [carData])

    return (
       <View style={styles.priceLabelContainer}>
            <Button title="<" color={'#01A6B3'} onPress={goPrevious} disabled={disabled2} />
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title=">" color={'#01A6B3'} onPress={goNext} disabled={disabled1} />
       </View>
    )
}