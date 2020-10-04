import React, { useRef } from 'react';
import { StyleSheet, View, PanResponder } from 'react-native';

export default function Card(props) {
    const leftSwipe = ({ moveX, moveY, dx, dy }) => {
        if (dx < -200)
            return true;
        else
            return false;
    }

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => {
                return true
            },
            onPanResponderEnd: (e, gestureState) => {
                console.log(gestureState)
                if (leftSwipe(gestureState))
                    alert('Click Title for GitHub!')
                return true
            }
        })
    ).current;

    return (
        <View style={styles.card} {...panResponder.panHandlers}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </ View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        marginHorizontal: 4,
        marginVertical: 14,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowRadius: 2,
        shadowOpacity: 0.3,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 12,
    },
})