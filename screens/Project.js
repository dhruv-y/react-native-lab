import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Button, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from '../styles/Global';
import Navbar from '../components/Navbar';
import * as Animatable from 'react-native-animatable';
import Card from '../components/Card'
export default function Projects({ navigation }) {

    const [projects, setProjects] = useState([
        { id: 1, name: 'DevLink', keywords: 'React, Node, MongoDB', link: 'https://github.com/dhruv-y/dev-link' },
        { id: 2, name: 'Weather Science Gateway', keywords: 'Django, React, PostgreSQL', link: 'https://github.com/airavata-courses/ScrumLords' },
        { id: 3, name: 'BTown Events', keywords: '.NET, C#, SQL', link: 'https://github.com/dhruv-y/btown-events' }
    ])

    return (
        <View style={globalStyles.container}>
            <Navbar />
            <Animatable.View animation="fadeInDown" duration={1000} delay={200}>
                <Text style={globalStyles.primaryTitle}>PROJECTS</Text>
                <FlatList
                    data={projects}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => Linking.openURL(item.link)} key={item.id}>
                            <Card>
                                <Text style={globalStyles.secondaryTitle}>{item.name}</Text>
                                <Text style={globalStyles.subTitle}>Tech Used- {item.keywords}</Text>
                            </Card>
                        </TouchableOpacity>
                    )
                    }
                />
            </Animatable.View>
        </View >
    )
}