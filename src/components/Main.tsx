//import { observer } from 'mobx-react-lite';
import { observer } from 'mobx-react-lite';
import React, { ChangeEventHandler, useState } from 'react'
import { Button, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import { useStore } from '../hooks/useStore';
import User from '../models/UserModel/UserTypes';

const Main: React.FC = () => {
    const { id, name, setName }: User = useStore('UserStore');
    const [userName, setUserName] = useState('');

    const handleOnPress = () => {
        setName(userName);
        setUserName('');
    }

    const handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        setUserName(e.nativeEvent.text)
    }

    return (
        <View>
            <Text key={id}>User: {name}</Text>
            <TextInput
                value={userName}
                placeholder='Enter your name'
                onChange={handleOnChange}
            />

            <Button
                title='ADD'
                onPress={handleOnPress}
            />
        </View>
    )
}
export const MainComponent = observer(Main);
