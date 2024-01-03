import { Image, View } from "react-native";
import { styles } from "./style";

import logo from '../../../../../assets/logo.png';

export default function CardViewLogoChildren(){
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={logo} />
        </View>
    )
}