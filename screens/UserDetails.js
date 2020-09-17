import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/Global'

export default function UserDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.primaryTitle}>USER DETAILS</Text>
            <View>
                <View>
                    <TextInput placeholder="First Name" />
                    <TextInput placeholder="Last Name" />
                </View>
                <TextInput placeholder="Email" />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                />
            </View>

            <View>
                <Button
                    title="SUBMIT"
                    color='#B0925A'
                    fontFamily='montserrat-regular'
                />
            </View>
        </View>
    )
}