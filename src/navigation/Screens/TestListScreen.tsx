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

const TestListScreen: React.FunctionComponent = () => {
    const tests: TestListType = (useStore('TestListStore'));
    console.log(tests.test_list);
    const responseStatus = tests.status;

    const handeleSelect = (id: string): void => {
        console.log(id)
    }

    useEffect(() => {
        tests.fetchTests();
    }, [])

    if (responseStatus === status.pending) {
        return (<Loader />);
    } else if (responseStatus === status.success) {
        return (
            <ScrollView>
                {tests.test_list.map(({ id, quiz_name, questions_count }: ITestTypes) => {
                    return <TestComponent
                        key={id}
                        id={id}
                        name={quiz_name}
                        count_questions={questions_count}
                        selectTest={handeleSelect}
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
