import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,
        padding: 32,
    },

    image: {
        flex:1,
        marginBottom: 10,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});