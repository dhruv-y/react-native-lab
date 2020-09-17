import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/Global';
import { Formik } from 'formik';

export default function Register() {


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.primaryTitle}>REGISTER</Text>

            <Formik
                initialValues={{ fname: '', lname: '', email: '', password: '' }}
                onSubmit={({ fname, lname, email, password }) => alert(`Name - ${fname}${lname}
Credentials - ${email}/${password}`)}
            >

                {(props) => (
                    <View style={globalStyles.form}>

                        <TextInput placeholder="First Name"
                            style={globalStyles.input}
                            onChangeText={props.handleChange('fname')}
                            value={props.values.fname}
                        />

                        <TextInput placeholder="Last Name"
                            style={globalStyles.input}
                            onChangeText={props.handleChange('lname')}
                            value={props.values.lname} />

                        <TextInput placeholder="Email"
                            style={globalStyles.input}
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                        />

                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            style={globalStyles.input}
                            name='password'
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                        />

                        <View style={globalStyles.buttonContainer}>
                            <Button
                                title="SUBMIT"
                                color='#B0925A'
                                fontFamily='montserrat-regular'
                                onPress={props.handleSubmit}
                            />
                        </View>
                    </View>

                )}


            </Formik>
        </View >
    )
}