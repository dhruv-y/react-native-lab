import React, { useState, useRef } from 'react';
import { FlatList, StyleSheet, View, Text, PanResponder, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from '../styles/Global';
import { MaterialIcons } from "@expo/vector-icons"
import Navbar from '../components/Navbar';
import * as Animatable from 'react-native-animatable';
import Card from '../components/Card'

export default function Projects({ navigation }) {
    const [projects, setProjects] = useState([
        { id: '1', name: 'DevLink', keywords: 'React, Node, MongoDB', link: 'https://github.com/dhruv-y/dev-link' },
        { id: '2', name: 'Weather Science Gateway', keywords: 'Django, React, PostgreSQL', link: 'https://github.com/airavata-courses/ScrumLords' },
        { id: '3', name: 'BTown Events', keywords: '.NET, C#, SQL', link: 'https://github.com/dhruv-y/btown-events' },
        { id: '4', name: 'Urban Forager', keywords: 'React Native, Firebase', link: 'https://github.com/dhruv-y/urban-foraging-app' },
    ])

    return (
        <View style={globalStyles.container}>
            <Navbar />
            <Animatable.View animation="slideInRight" duration={800} delay={200}>
                <Text style={globalStyles.primaryTitle}>PROJECTS</Text>
                <FlatList
                    data={projects}
                    renderItem={({ item }) => (

                        <Card>
                            <TouchableOpacity onPress={() => Linking.openURL(item.link)} key={item.id}>
                                <Text style={globalStyles.secondaryTitle}>
                                    <MaterialIcons
                                        name={"arrow-drop-down"}
                                        size={20}
                                    /> {item.name}</Text>
                            </TouchableOpacity>
                            <Text style={globalStyles.subTitle}>Tech Used- {item.keywords}</Text>
                        </Card>

                    )
                    }
                />
            </Animatable.View>
        </View >
    )
}