import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestListScreen from '../Screens/TestListScreen';
import TestScreen from '../Screens/TestScreen';
import HeaderTittle from '../../components/HeaderTittle/HeaderTittle';
import QuestionsDrawer from '../QuestionsDrawer';

type header = {
    title: string
}
const TestStack: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTitle: (props: any) => <HeaderTittle name={props.children} />,
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#414141'
                }
            })}
        >
            <Stack.Screen
                name="QTEST"
                component={TestListScreen}

            />

            <Stack.Screen
                name="Test"
                component={TestScreen}
            />
            {/* <Stack.Screen
                name="Test"
                component={QuestionsDrawer}
                options={({ route }: any) => {
                    return {
                        headerTitle: () => <HeaderTittle name={route.params.quiz_name} />,
                    }
                }}
            /> */}
        </Stack.Navigator>
    );
}

export default TestStack;