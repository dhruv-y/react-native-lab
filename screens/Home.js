import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Image, Button, Platform, Modal } from 'react-native';
import { globalStyles } from '../styles/Global'
import { MaterialIcons } from "@expo/vector-icons"
import myImg from '../images/img-edit.jpeg'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);

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

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got a message! 📬",
            body: 'Hello from the notification bar',
            data: { data: 'Dummy data goes here' },
        },
        trigger: { seconds: 2 },
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}