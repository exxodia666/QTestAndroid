import React from 'react'
import { View, Text } from 'react-native'
import { useStore, useStores } from '../../hooks/useStore'
import User from '../../models/UserModel/UserTypes';

const UserScreen: React.FC = () => {
    const { id, name, setName }: User = useStore('UserStore');
    return (
        <View>
            <Text>USER SCREEN</Text>
        </View>
    )
}

export default UserScreen