import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Link({ message, type }) {

    if (type == 'danger') {
        return (
            <View style={styles.danagerContainer}>
                <FontAwesome name="close" style={styles.dangerIcon} />
                <Text style={styles.dangerText}>
                    {message}
                </Text>
            </View>
        );
    } else if(type === 'success') {
        return (
            <View style={styles.successContainer}>
                <FontAwesome name="check" style={styles.successIcon} />
                <Text style={styles.successText}>
                    {message}
                </Text>
            </View>
        );
    } else {
        return <></>;
    }
}

const styles = StyleSheet.create({
    danagerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebcece',
        marginVertical: 5,
        borderRadius: 5,
    },
    dangerIcon: {
        paddingTop: 1,
        paddingHorizontal: 5,
        fontSize: 18,
        color: '#b37177'
    },
    dangerText: {
        fontSize: 16,
        color: '#b37177',
        paddingVertical: 10,
        textAlign: 'center'
    },
    successContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3eac9',
        marginVertical: 5,
        borderRadius: 5,
    },
    successIcon: {
        paddingTop: 1,
        paddingHorizontal: 5,
        fontSize: 18,
        color: '#799a75'
    },
    successText: {
        fontSize: 16,
        color: '#799a75',
        paddingVertical: 10,
        textAlign: 'center'
    },
});
