import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/Global';
import { Field, reduxForm } from 'redux-form';
import Navbar from '../components/Navbar';

const Register = (props) => {

    const { handleSubmit } = props;

    const onSubmit = (values) => alert(`Welcome ${values.fname} ${values.lname}!`);

    const renderInput = ({ input: { onChange, ...input }, ...rest }) => {
        return <TextInput style={globalStyles.input} onChangeText={onChange} {...input} {...rest} />
    };

    return (
        <View style={globalStyles.container}>
            <Navbar />

            <View style={globalStyles.form}>
                <Text style={globalStyles.primaryTitle}>REGISTER</Text>
                <Field
                    name={'fname'}
                    props={{
                        placeholder: 'First Name'
                    }}
                    component={renderInput}
                />

                <Field
                    name={'lname'}
                    props={{
                        placeholder: 'Last Name'
                    }}
                    component={renderInput}
                />

                <Field
                    name={'email'}
                    props={{
                        placeholder: 'Email'
                    }}
                    component={renderInput}
                />
                <Field
                    name={'password'}
                    props={{
                        placeholder: 'Password',
                        secureTextEntry: true
                    }}
                    component={renderInput}
                />
                <View style={globalStyles.buttonContainer}>
                    <Button
                        title="SUBMIT"
                        color='#B0925A'
                        fontFamily='montserrat-regular'
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>

        </View >
    )
}

export default reduxForm({ form: 'test-form' })(Register);
