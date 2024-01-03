import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#01A6B3',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 8
    },

    button: {
        flexDirection: 'row',
        padding: 10,
        gap: 10,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center'

    },

    buttonText: {
        color: '#fff',
        fontWeight:'bold',
        fontStyle: "italic",
        fontSize: 17  
    }
});