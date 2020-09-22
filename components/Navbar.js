import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, Platform, Modal } from 'react-native';
import { globalStyles } from '../styles/Global'
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';


export default function Navbar() {
    const navigation = useNavigation();
    return (
        <View style={styles.navbar}>
            <MaterialIcons
                name={"home"}
                size={25}
                onPress={() => navigation.navigate('Home')}
                style={globalStyles.modalToggle}
            />
            <View style={styles.nav} >
                <MaterialIcons
                    name={"search"}
                    size={25}
                    style={globalStyles.modalToggle}
                />
                <MaterialIcons
                    name={"person"}
                    size={25}
                    onPress={() => navigation.navigate('Register')}
                    style={globalStyles.modalToggle}
                />
            </View>
        </View>
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
});