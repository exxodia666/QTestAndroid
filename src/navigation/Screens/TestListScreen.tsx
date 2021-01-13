import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../../components/Loader';
import TestComponent from '../../components/TestComponent/TestComponent';
import status from '../../enum/status';
import { useStore } from '../../hooks/useStore';
import TestListType from '../../models/TestListModel/TestListTypes';
import ITestTypes from '../../models/TestModel/ITestTypes';

const TestListScreen: React.FunctionComponent<any> = ({ navigation }) => {
    const tests: TestListType = (useStore('TestListStore'));
    const responseStatus = tests.status;
    const handeleSelect = (test: ITestTypes): void => {
        navigation.navigate('Test', test)
    }
    useEffect(() => {
        tests.fetchTests();
    }, [])

    console.log('Test List Screen')
    if (responseStatus === status.pending) {
        return (<Loader />);
    } else if (responseStatus === status.success) {
        return (
            <ScrollView>
                {tests.test_list.map((test: ITestTypes) => {
                    return <TestComponent
                        key={test.id}
                        id={test.id}
                        name={test.quiz_name}
                        count_questions={test.questions_count}
                        selectTest={() => handeleSelect(test)}
                    />
                }
                )}
            </ScrollView>
        )
    } else if (responseStatus === status.error) {
        return (<Text>Error</Text>);
    }
}

export default observer(TestListScreen);
