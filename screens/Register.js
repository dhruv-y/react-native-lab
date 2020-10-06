import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/Global';
import { connect, useDispatch, getState } from "react-redux";
import Navbar from '../components/Navbar';
import REGISTER_USER from '../reducers/registerReducer'
import { store, persistor } from '../store'

export default function Register({ navigation }) {
    const dispatch = useDispatch()
    const registerUser = user => {
        const data = dispatch({ type: REGISTER_USER, payload: user })
        console.log(data.payload)
        console.log(store.getState())
        alert(`Welcome ${fname} ${lname}!`)
    }

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    /*
    const handleSubmit = () => {
        console.log(`Redux Registration Successful - ${fname} ${lname}`)
        let registerDetails = {};
        registerDetails.fname = fname;
        registerDetails.lname = lname
        registerDetails.email = email;
        registerDetails.password = password;
    }
    */

    return (
        <View style={globalStyles.container}>
            <Navbar />
            <View style={globalStyles.form}>
                <Text style={globalStyles.primaryTitle}>REGISTER</Text>

                <TextInput
                    placeholder="First Name"
                    style={globalStyles.input}
                    name='fname'
                    value={fname}
                    onChangeText={text => setFname(text)}
                />

                <TextInput
                    placeholder="Last Name"
                    style={globalStyles.input}
                    name='lname'
                    value={lname}
                    onChangeText={text => setLname(text)}
                />

                <TextInput
                    placeholder="Email"
                    style={globalStyles.input}
                    name='email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={globalStyles.input}
                    name='password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <View style={globalStyles.buttonContainer}>
                    <Button
                        title="SUBMIT"
                        color='#B0925A'
                        fontFamily='montserrat-regular'
                        onPress={() => registerUser({ fname, lname, email, password })}
                        style={globalStyles.button}
                    />
                </View>
            </View>
            <Text style={globalStyles.secondaryTitle}>Logged in as <Text style={{ color: 'red' }}>{email}</Text></Text>
        </View >
    )
}
