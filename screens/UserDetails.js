import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/Global'

export default function UserDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Details Screen</Text>
            <View style={globalStyles.buttonContainer}>
                <Button
                    title="Home"
                    onPress={() => navigation.goBack()}
                    color='#B0925A'
                    fontFamily='montserrat-regular'
                />
            </View>
        </View>
    )
}