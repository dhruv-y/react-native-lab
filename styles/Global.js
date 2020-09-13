import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    primaryTitle: {
        color: "#B0925A",
        fontSize: 30,
        fontFamily: 'montserrat-regular',
    },
    secondaryTitle: {
        color: 'black',
        fontSize: 20,
        marginTop: 8,
        fontFamily: 'montserrat-regular',
    },
    buttonContainer: {
        padding: 20,
        margin: 40,
        width: 200,
    },
    modalToggle: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalContent: {
        flex: 1,
    },
})