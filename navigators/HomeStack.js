/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import AboutUs from '../pages/AboutUs';


export default function HomeStack() {
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About Us" component={AboutUs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
