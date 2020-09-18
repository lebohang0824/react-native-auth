import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function PasswordInput(props) {
    return (
        <TextInput style={styles.input} {...props} />
    );
}

const styles = StyleSheet.create({
    input: {
        
    },
});
