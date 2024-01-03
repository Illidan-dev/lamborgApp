import { Text, View } from "react-native";


import { styles } from "./styles";

export default function Divider(){
    return  (
        <View style={styles.dividerContainer}>
            <Text style={styles.divider}>Divisor</Text>
        </View>
    )
}