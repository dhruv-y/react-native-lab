import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text, Button, TextInput, Picker } from 'react-native';
import { globalStyles } from '../styles/Global'
import DatePicker from "react-native-datepicker";


export default function UserDetails({ navigation }) {

    const [date, setDate] = useState(new Date());

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.primaryTitle}>USER DETAILS</Text>
            <View style={globalStyles.form}>

                <DatePicker
                    style={{ width: 200 }}
                    date={date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2018"
                    maxDate="01-01-20122"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: "absolute",
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 36,
                        },
                    }}
                    onDateChange={(date) => setDate(date)}
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