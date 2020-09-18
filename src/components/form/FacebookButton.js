import React from 'react';
import { 
    StyleSheet, 
    TouchableOpacity, 
    Text, 
    View 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function FacebookButton({ onPress, children }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <View style={styles.container}>
                <FontAwesome name="facebook-square" style={styles.icon} />
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: '100%',
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b5998',
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '700'
    },
    container: {
        flexDirection: 'row'
    },
    icon: {
        paddingTop: 1,
        paddingHorizontal: 5,
        fontSize: 18,
        color: '#fff'
    }
});
