import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TestListScreen from './Screens/TestListScreen';
import UserScreen from './Screens/UserScreen';

const MainNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={TestListScreen}
                />
                <Tab.Screen
                    name="User"
                    component={UserScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default MainNavigator
