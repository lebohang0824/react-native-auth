import React from 'react';
import client from '../../helpers/Client';
import { StatusBar } from 'expo-status-bar';
import { saveToken } from '../../helpers/LocalStore';

import { 
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Image,
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
import imgMain from '../../assets/images/1.png';

export default function LoginScreen({ navigation }) {

    const [type, setType] = React.useState('');
    const [response, setResponse] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onLogin = () => {

        const inputs = {
            email: email,
            password: password
        }

        if (type) setType('');

        setLoading(true);

        client.post('login', inputs)
            .then(async ({ data }) => {
                const { success, message } = data;

                // Stop loading
                setLoading(false);

                setResponse(message);

                if (success) {

                    // Save login token
                    await saveToken(message);

                    // Reset
                    setEmail('')
                    setPassword('')

                    navigation.navigate('Home');
                } else {
                    setType('danger')
                }
            })
            .catch(err => console.log(err))
    }

    const navRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={false} backgroundColor="#fff" />
            <Grid style={styles.main}>
                <Row size={1} style={styles.header}>
                    <Text style={styles.title}>
                        Login Now
                    </Text>
                    <Text style={styles.text}>
                        Please login to continue to use our app.
                    </Text>
                </Row>
                <Row style={styles.imgWrapper}>
                    <Image source={imgMain} style={styles.img} />
                </Row>
                <Row size={2}>
                    <View style={styles.form}>

                        { loading && (
                            <View>
                                <ActivityIndicator size="large" />
                            </View>
                        )}
                            
                        { type === 'danger' && 
                            <Alert type="danger" message={response} />
                        }
                        
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

                        <Button bgColor="#c7ccea" weight="700" onPress={onLogin}>
                            Login now
                        </Button>

                        <View style={styles.wrapper}>
                            <Text style={[styles.label, {marginTop: 5}]}>
                                Don't have an account?
                            </Text>
                            <Link weight="700" color="#0857AB" onPress={navRegister}>Register now</Link>
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
    imgWrapper: { 
        width: '100%', 
        height: 170, 
        padding: 20, 
        alignItems: 'center', 
        flexDirection: 'column'
    },
    img: {
        width: '50%',
        height: '80%',
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
