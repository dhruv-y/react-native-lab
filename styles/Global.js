import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60,
    },
    primaryTitle: {
        color: "#B0925A",
        fontSize: 30,
        fontFamily: 'montserrat-regular',
        textAlign: 'center',
        margin: 15,
    },
    secondaryTitle: {
        color: 'black',
        fontSize: 20,
        marginTop: 6,
        fontFamily: 'montserrat-regular',
    },
    subTitle: {
        color: '#555',
        fontSize: 17,
        marginTop: 8,
        fontFamily: 'montserrat-regular',
    },
    buttonContainer: {
        padding: 20,
        margin: 20,
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
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 15,
        margin: 15,
    },
    form: {
        marginTop: 20,
        width: '80%',
        justifyContent: 'center',
    },
    picker: {
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#ddd',
        width: 300,
        borderRadius: 8,
        alignSelf: 'center',
        height: 50,
        fontFamily: 'montserrat-regular',
    },
})