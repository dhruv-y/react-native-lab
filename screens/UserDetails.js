import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/Global';
import Picker from '@react-native-community/picker/js/Picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import Navbar from '../components/Navbar';


export default function UserDetails({ navigation }) {

    const [lang, setLang] = useState('Python');
    const [gender, setGender] = useState('Male');

    const [myDate, setMyDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || myDate;
        setShow(Platform.OS === 'ios');
        setMyDate(currentDate);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return (

        <View style={globalStyles.container}>

            <Navbar />
            <View style={globalStyles.form}>
                <Text style={globalStyles.primaryTitle}>USER DETAILS</Text>
                <View style={globalStyles.picker}>
                    <Picker
                        selectedValue={lang}

                        onValueChange={(itemValue, itemIndex) =>
                            setLang(itemValue)
                        }>
                        <Picker.Item label="Python" value="Python" />
                        <Picker.Item label="Java" value="Java" />
                        <Picker.Item label="JavaScript" value="JavaScript" />
                        <Picker.Item label="Golang" value="Go" />
                    </Picker>
                </View>


                <View style={globalStyles.picker}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) =>
                            setGender(itemValue)
                        }>
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                </View>


                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={myDate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

                <View style={{ width: 250, alignSelf: 'center', marginTop: 40, }}>
                    <Button onPress={showDatepicker} title="Select a Date!"
                        color='#bababa'
                        textDecorationColor='black'
                    />
                </View>

                <View style={globalStyles.buttonContainer}>
                    <Button
                        title="SUBMIT"
                        color='#B0925A'
                        fontFamily='montserrat-regular'
                        onPress={() => alert(`Today is [${myDate}] and you opted for ${lang} | ${gender}`)}
                    />
                </View>
            </View>
        </View>
    )
}