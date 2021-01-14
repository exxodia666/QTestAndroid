import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { View, Text, NativeSyntheticEvent, TextInputChangeEventData, Button } from 'react-native'
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import ResultComponent from '../../components/Result/Results';
import { useStore } from '../../hooks/useStore'
import User from '../../models/UserModel/UserTypes';

const UserScreen: React.FC = () => {
    //const { id, name, setName }: User = useStore('UserStore');
    //const rating: number[] = (useStore('TestListStore').test_list).map(e => e.rating);
    const user: User = useStore('UserStore');
    useEffect(() => {
        user.loadFromAsync();
    }, [user.results])

    useEffect(() => {
        //if (user.id.length) {
        user.fetchResults();
        //}
        return () => {
            user.clearResults()
        }
    }, [user.id])
    //todo flatList
    const [name, setname] = useState('');

    return (
        <View>
            <Text>USER SCREEN</Text>
            {Boolean(user.results!.length) &&
                <ScrollView>
                    {user.results!.map(e => {
                        return (<ResultComponent key={e.pass_date} quiz_name={e.quiz_name} rating={e.rating} pass_date={e.pass_date} />)
                    })}
                </ScrollView>
            }
            <TextInput
                placeholder='Enter your name'
                style={{ borderWidth: 1, margin: 5 }}
                onChangeText={(e) => setname(e)}
                value={name}
            />
            <Button
                title='Login'
                onPress={() => user.authUser(name)}
            />
            <Button
                color='red'
                title='Logout'
                onPress={() => user.logoutUser()}
            />

        </View >
    )
}
export default observer(UserScreen);