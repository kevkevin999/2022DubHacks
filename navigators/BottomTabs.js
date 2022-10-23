/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutUs from '../pages/AboutUs';
import HomeScreen from '../pages/HomeScreen';

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About Us" component={AboutUs} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
