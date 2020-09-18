import React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';

import { 
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text, 
    View 
} from 'react-native';
import { 
    Row, 
    Grid 
} from "react-native-easy-grid";

import Alert from '../../components/alert/Alert'

import Link from '../../components/Link'
import Input from '../../components/form/Input'
import Button from '../../components/form/Button'

export default function RegisterScreen({ navigation }) {

    const [type, setType] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rpassword, setRPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const onRegister = () => {

        const inputs = {
            name: name,
            email: email,
            password: password
        }

        if (type) setType('');

        setLoading(true);

        axios.post('https://0b854293ec94.ngrok.io/api/register', inputs)
            .then(({ data }) => {
                const { success, message } = data;

                // Stop loading
                setLoading(false);


                if (success) {
                    setType('success')

                    // Reset
                    setName('')
                    setEmail('')
                    setPassword('')
                } else {
                    setType('danger')
                }
            })
            .catch(err => console.log(err))
    }

    const navLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={false} backgroundColor="#fff" />
            <Grid style={styles.main}>
                <Row style={styles.header} size={1}>
                    <Text style={styles.title}>
                        Create Account
                    </Text>
                    <Text style={styles.text}>
                        Please create account to start to use our app.
                    </Text>
                </Row>
                <Row size={3}>
                    <View style={styles.form}>

                        { loading && (
                            <View>
                                <ActivityIndicator size="large" />
                            </View>
                        )}

                        { type === 'success' && 
                            <Alert type="success" message="Thank you for your login!" /> }

                        { type === 'danger' && 
                            <Alert type="danger" message="Thank you for your login!" /> }

                        <Text style={styles.label}>
                            Full Name
                        </Text>
                        <Input 
                            value={email}
                            placeholder="Full Name" 
                            onChangeText={
                                text => setName(text)
                            }
                        />

                        <Text style={styles.label}>
                            E-mail Address
                        </Text>
                        <Input 
                            value={email}
                            placeholder="Email" 
                            onChangeText={
                                text => setEmail(text)
                            }
                        />

                        <Text style={styles.label}>
                            Password
                        </Text>
                        <Input 
                            value={password}
                            placeholder="Password" 
                            secureTextEntry={true}
                            onChangeText={
                                text => setPassword(text)
                            }
                        />

                        <Text style={styles.label}>
                            Repeat Password
                        </Text>
                        <Input
                            value={rpassword}
                            secureTextEntry={true} 
                            placeholder="Repeat Password" 
                            onChangeText={
                                text => setRPassword(text)
                            }
                        />

                        <Button 
                            weight="700" 
                            bgColor="#c7ccea" 
                            onPress={onRegister}>
                            Register now
                        </Button>

                        <View style={styles.wrapper}>
                            <Text style={[styles.label, {marginTop: 5}]}>
                                Do you have an account?
                            </Text>
                            <Link weight="700" color="#0857AB" onPress={navLogin}>Login now</Link>
                        </View>
                    </View>
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
        padding: 26,
    },
    header: {
        flexDirection: 'column'
    },
    title: {
        fontSize: 30,
        color: '#3E4A59',
        fontWeight: '700',
        marginTop: 40,
    },
    text: {
        paddingVertical: 10,
        color: '#8B959A',
        fontSize: 15,
    },
    form: {
        width: '100%',
        flexDirection: 'column'
    },
    label: {
        color: '#3E4A59',
        marginBottom: 3,
    },
    wrapper: {
        alignSelf: 'center',
        flexDirection: 'row',
        paddingTop: 10,
    },
});
