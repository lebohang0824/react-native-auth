import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Link({ onPress, children, bgColor, color, weight }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>

            <Text style={[
                styles.text, 
                {color: color, fontWeight: weight}
                ]}>

                {children}
                
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 15,
    }
});
