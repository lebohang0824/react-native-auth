import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input(props) {
    return (
        <TextInput style={styles.input} {...props} />
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderColor: '#8B959A',
        marginBottom: 15,
        width: '100%',
    },
});
