import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/auth/LoginScreen'
import RegisterScreen from './src/screens/auth/RegisterScreen'

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitle: null,
                    headerLeftContainerStyle: { backgroundColor: '#fff'},
                    headerTransparent: true
                }}
            >

                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                />
                
                <Stack.Screen 
                    name="Register" 
                    component={RegisterScreen} 
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}