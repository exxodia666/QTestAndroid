import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '../Screens/UserScreen';
import User from '../../models/UserModel/UserTypes';
import { useStore } from '../../hooks/useStore';
import { Text } from 'react-native';


const UserStack: React.FC = () => {
    const Stack = createStackNavigator();
    const { id, name, setName }: User = useStore('UserStore');
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Results"
                component={UserScreen}
                options={{
                    headerRight: () => <Text>{name}</Text>
                }}
            />
        </Stack.Navigator>
    );
}

export default UserStack;