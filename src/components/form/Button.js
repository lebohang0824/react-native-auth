import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Button({ onPress, children, bgColor, color, weight }) {
    return (
        <TouchableOpacity style={[
                styles.btn, 
                {backgroundColor: bgColor} 
            ]} onPress={onPress}>

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
        height: 50,
        width: '100%',
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '700'
    }
});
