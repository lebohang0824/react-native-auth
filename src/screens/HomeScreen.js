import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { 
    Image, 
    StyleSheet, 
    ScrollView,
    Text, 
    View 
} from 'react-native';
import { Row, Grid } from "react-native-easy-grid";

import Button from '../components/form/Button';
import FacebookButton from '../components/form/FacebookButton';
import imgMain from '../assets/images/main.png';

export default function HomeScreen({ navigation }) {

    const navLogin = () => {
        navigation.navigate('Login')
    }

    const facebookLogin = () => {
        
    }

    const navRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={false} backgroundColor="#fff" />
            <Grid style={styles.main}>
                <Row size={1}>
                    <Text style={styles.title}>
                        Hop on the Hype Train!
                    </Text>
                </Row>
                <Row style={styles.imgWrapper}>
                    <Image source={imgMain} style={styles.img} />
                </Row>
                <Row size={2}>
                    <Row style={styles.form}>
                        <Button bgColor="#c7ccea" weight="700" onPress={navLogin}>
                            Login now
                        </Button>
                        <FacebookButton onPress={() => alert('')}>
                            Continue with Facebook
                        </FacebookButton>
                        <Button bgColor="#fff" weight="100" color="#aaa" onPress={navRegister}>
                            Register with Email
                        </Button>
                    </Row>
                </Row>
            </Grid>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    main: {
        padding: 25,
    },
    imgWrapper: {
        height: 280,
        marginTop: 30,
        paddingVertical: 10
    },
    img: {
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        color: '#3E4A59',
        fontWeight: '700',
        paddingVertical: 10,
    },
    form: {
        flexDirection: 'column',
        paddingVertical: 10,
    }
});
