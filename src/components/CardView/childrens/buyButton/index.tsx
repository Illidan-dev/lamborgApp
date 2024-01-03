import { Text, TouchableOpacity, View } from "react-native";
import {AntDesign} from '@expo/vector-icons'
import { styles } from "./style";


export default function CardViewBuyButtonChildren(){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <AntDesign name="shoppingcart" size={24} color="white" />
                <Text style={styles.buttonText}>Buy this</Text>
            </TouchableOpacity>
        </View>
    )
}