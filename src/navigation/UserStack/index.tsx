import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '../Screens/UserScreen';
import User from '../../models/UserModel/UserTypes';
import { useStore } from '../../hooks/useStore';
import { Text } from 'react-native';
import { View } from 'react-native';
import HeaderTittle from '../../components/HeaderTittle/HeaderTittle';


const UserStack: React.FC = () => {
    const Stack = createStackNavigator();
    const { id, name, setName }: User = useStore('UserStore');
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTitle: (props) => <HeaderTittle name={props.children} />,
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#414141'
                }
            })}
        >
            <Stack.Screen
                name="Results"
                component={UserScreen}
                options={{
                    headerRight: () => <View style={{
                        padding: 15,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#bfbfbf',
                            fontSize: 16
                        }}
                        >
                            Logged as: {name}
                        </Text>
                    </View>
                }}
            />
        </Stack.Navigator>
    );
}

export default UserStack;