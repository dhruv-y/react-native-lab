import React from 'react'
import { StyleSheet, Text, View, Image, Button, Linking, Platform } from 'react-native';
import { globalStyles } from '../styles/Global'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import myImg from '../images/img-edit.jpeg'

export default function Home() {
    return (
        <View style={globalStyles.container}>

            <View style={styles.navbar}>
                <Icon
                    name={Platform.OS === "ios" ? "ios-home" : "home"}
                    size={30}>
                </Icon>
                <View style={styles.nav} >
                    <Icon
                        name={"search-web"}
                        size={30}
                        color='black'
                        style={styles.nav_search}
                    />

                    <Icon
                        name={"github-face"}
                        size={30}
                        color='black'
                    />
                </View>

            </View>

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
                <Button
                    title="Get Started"
                    style={styles.button}
                    onPress={() => this.onPress()}
                    color='#B0925A'
                    fontFamily='montserrat-regular'
                />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 40,
        width: 380,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nav_search: {
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
        padding: 20,
        margin: 40,
        width: 200,
    },
    top: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    mid: {
        flex: 4,
        justifyContent: 'flex-start',
    }
});