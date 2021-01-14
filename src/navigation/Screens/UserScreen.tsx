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
    }, [])

    useEffect(() => {
        if (user.id.length) {
            user.fetchResults();
        }
        return () => {
            user.clearResults()
        }
    }, [user.id])



    //todo flatList
    const [name, setname] = useState('');
    console.log('user results')
    console.log(user.results)
    return (
        <View>
            {Boolean(user.results!.length) &&

                <View style={{ borderWidth: 1, margin: 5, padding: 5 }}>
                    <ScrollView>
                        {user.results!.map(e => {
                            return (<Text >{`${e.quiz_name}${e.pass_date}${e.rating}`}</Text>)
                        })}
                    </ScrollView>
                </View>
            }

            <View style={{ borderWidth: 1, margin: 5, padding: 5 }}>
                <Text>
                    id: {user.id}
                </Text>
                <Text>key: {user.key}</Text>
                <Text>name: {user.name}</Text>
            </View>

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