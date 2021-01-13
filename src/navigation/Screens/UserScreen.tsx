import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { View, Text, NativeSyntheticEvent, TextInputChangeEventData, Button } from 'react-native'
import { TextInput, } from 'react-native-gesture-handler';
import ResultComponent from '../../components/Result/Results';
import { useStore } from '../../hooks/useStore'
import User from '../../models/UserModel/UserTypes';

const UserScreen: React.FC = () => {
    //const { id, name, setName }: User = useStore('UserStore');
    //const rating: number[] = (useStore('TestListStore').test_list).map(e => e.rating);
    const user: User = useStore('UserStore');

    //todo flatList
    const [name, setname] = useState('');
    return (
        <View>
            {/* {rating.map(e => {
                <ResultComponent
                    name={'gsadgsdgdgsdgsdgsgd'}
                    rating={e}
                />
            })} */}
            <Text>{name}</Text>
            <TextInput
                onChangeText={(e) => setname(e)}
                value={name}
            />
            <Button
                title='AUTH'
                onPress={() => user.authUser(name)}
            />
            <Text>USER SCREEN</Text>
        </View>
    )
}

export default observer(UserScreen);