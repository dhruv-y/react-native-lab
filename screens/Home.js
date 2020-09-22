import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, Platform, Modal } from 'react-native';
import { globalStyles } from '../styles/Global'
import { MaterialIcons } from "@expo/vector-icons"
import myImg from '../images/img-edit.jpeg'
import Login from '../components/Login'
import Navbar from '../components/Navbar'

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide' >
                <View style={globalStyles.modalContent}>
                    <MaterialIcons
                        name={"close"}
                        size={30}
                        onPress={() => setModalOpen(false)}
                        style={globalStyles.modalToggle}
                    />
                    <Login />
                </View>
            </Modal>

            <Navbar />

            <View style={styles.top}>
                <Text style={globalStyles.primaryTitle}>DHRUV YADWADKAR</Text>
                <Text style={globalStyles.secondaryTitle}>Graduate Student in Computer Science</Text>
            </View>

            <View style={styles.mid}>
                <Image source={myImg}
                    style={styles.image}
                />
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="Details"
                        onPress={() => navigation.navigate('Details')}
                        color='#B0925A'
                        fontFamily='montserrat-regular'
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title="Login"
                        onPress={() => setModalOpen(true)}
                        color='#B0925A'
                        fontFamily='montserrat-regular'
                    />
                </View>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 40,
        width: 380,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navSearch: {
        marginRight: 20,
    },
    nav: {
        flexDirection: 'row',
    },
    image: {
        height: 420,
        width: 340,
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '70%',
    },
    button: {
        width: '40%',
        height: 80
    },
    top: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mid: {
        flex: 3,
        justifyContent: 'flex-start',
    }
});