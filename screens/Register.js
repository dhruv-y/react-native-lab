import React, { useState } from 'react';
import { Keyboard, Alert, StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/Global';
import { connect, useDispatch, getState } from "react-redux";
import Navbar from '../components/Navbar';
import { store, persistor } from '../store'
import { registerUser } from "../actions/registerUser"

class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { fname: "", lname: "", email: "", password: "" };
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setFname = this.setFname.bind(this);
        this.setLname = this.setLname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        let registerDetails = {};
        registerDetails.email = this.state.email;
        registerDetails.password = this.state.password;
        registerDetails.fname = this.state.fname;
        registerDetails.lname = this.state.lname
        this.props.reduxsaveRegisterDetails(registerDetails)
        Alert.alert(`Welcome ${registerDetails.email}!`)
    }

    setEmail = (email) => {
        this.setState({ email });
    }
    setPassword = (password) => {
        this.setState({ password });
    }
    setFname = (fname) => {
        this.setState({ fname });
    }
    setLname = (lname) => {
        this.setState({ lname });
    }


    render() {
        return (
            <View style={globalStyles.container}>
                <Navbar />
                <View style={globalStyles.form}>
                    <Text style={globalStyles.primaryTitle}>REGISTER</Text>

                    <TextInput
                        placeholder="First Name"
                        style={globalStyles.input}
                        value={this.state.fname}
                        onChangeText={this.setFname}
                    />
                    <TextInput
                        placeholder="Last Name"
                        style={globalStyles.input}
                        value={this.state.lname}
                        onChangeText={this.setLname}
                    />
                    <TextInput
                        placeholder="Email"
                        style={globalStyles.input}
                        value={this.state.email}
                        onChangeText={this.setEmail}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        style={globalStyles.input}
                        value={this.state.password}
                        onChangeText={this.setPassword}
                    />
                    <View style={globalStyles.buttonContainer}>
                        <Button
                            title="SUBMIT"
                            color='#B0925A'
                            fontFamily='montserrat-regular'
                            style={globalStyles.button}
                            onPress={this.handleSubmit}
                        />
                    </View>
                </View>
                <Text style={globalStyles.secondaryTitle}>Logged in as <Text style={{ color: 'red' }}>{this.state.email}</Text></Text>
            </View >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduxsaveRegisterDetails: (registerDetails) => dispatch(registerUser(registerDetails))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Register);