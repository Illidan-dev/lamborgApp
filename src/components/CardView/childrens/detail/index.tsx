import { Text, View } from "react-native";
import { styles } from "./styles";
import { CarModel } from "../../props";

interface ViewDetails {
    carData: CarModel | null;
}

export default function CardViewDetailChildren({carData}: ViewDetails){
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.carBrand}>Lamborghini {carData?.id}</Text>
            <Text style={styles.carName}>MODEL {carData?.carName}</Text>
        </View>
    );
}