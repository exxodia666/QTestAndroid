import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '../Screens/UserScreen';
import User from '../../models/UserModel/UserTypes';
import { useStore } from '../../hooks/useStore';
import { Text } from 'react-native';
import { View } from 'react-native';
import HeaderTittle from '../../components/HeaderTittle/HeaderTittle';
import { observer } from 'mobx-react-lite';


const UserStack: React.FC = () => {
    const Stack = createStackNavigator();
    const user: User = useStore('UserStore');

    useEffect(() => {
        user.loadFromAsync();
    }, []);
    if (user.name.length) {

    }
    return (
        <Stack.Navigator
            screenOptions={() => ({
                //headerTitle: (props) => <HeaderTittle name={user.name} />,
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#414141'
                }
            })}
        >
            <Stack.Screen
                name="User"
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
                            Logged as: {user.name}
                        </Text>
                    </View>
                }}
            />
        </Stack.Navigator>
    );
}

export default observer(UserStack);