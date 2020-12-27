import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestListScreen from '../Screens/TestListScreen';
import TestScreen from '../Screens/TestScreen';

type header = {
    title: string
}
const TestStack: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="TestList" component={TestListScreen} />
            <Stack.Screen
                name="Test"
                component={TestScreen}
                options={({ route }): header => ({ title: route.params.quiz_name })}
            />
        </Stack.Navigator>
    );
}

export default TestStack;