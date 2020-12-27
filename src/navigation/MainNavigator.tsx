import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TestListScreen from './Screens/TestListScreen';
import UserScreen from './Screens/UserScreen';
import TestStack from './TestStack';
import UserStack from './UserStack';

const MainNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={TestStack}
                />
                <Tab.Screen
                    name="User"
                    component={UserStack}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default MainNavigator
