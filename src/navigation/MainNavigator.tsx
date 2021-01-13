import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TestStack from './TestStack';
import UserStack from './UserStack';
import TabBarButton from '../components/TabBarButton/TabBarButton';
import TabBarButtonTypes from '../components/TabBarButton/TabBarButtonTypes';


const MainNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={TestStack}
                    options={{
                        tabBarButton: ({ onPress, accessibilityState }: TabBarButtonTypes) =>
                        (<TabBarButton
                            onPress={onPress}
                            accessibilityState={accessibilityState}
                            name='home'
                        />),
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={UserStack}
                    options={{
                        tabBarButton: ({ onPress, accessibilityState }: TabBarButtonTypes) =>
                        (<TabBarButton
                            onPress={onPress}
                            accessibilityState={accessibilityState}
                            name={'user'}
                        />),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default MainNavigator
