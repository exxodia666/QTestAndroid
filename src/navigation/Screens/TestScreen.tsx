import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../../components/Loader';
import Question from '../../components/Question/Question';
import TestComponent from '../../components/TestComponent/TestComponent';
import status from '../../enum/status';
import { useStore } from '../../hooks/useStore';
import { IQuestionTypes } from '../../models/QuestionModel/IQuestionTypes';
import TestListType from '../../models/TestListModel/TestListTypes';
import ITestTypes from '../../models/TestModel/ITestTypes';
import User from '../../models/UserModel/UserTypes';

const TestScreen: React.FunctionComponent<any> = ({ route }) => {
    const { fetchQuestions, id }: ITestTypes = route.params;
    const responseStatus: status = (useStore('TestListStore').test_list.filter(i => i.id === id)[0].status!);
    const sendAnswers: any = (useStore('TestListStore').test_list.filter(i => i.id === id)[0].sendAnswers);
    const user: User = useStore('UserStore');
    const questions: IQuestionTypes[] = (useStore('TestListStore').test_list.filter(i => i.id === id)[0].questions!);

    useEffect(() => {
        fetchQuestions(id);

    }, [])
    console.log('Test Screen')
    if (responseStatus === status.pending) {
        console.log('responseStatus')
        console.log(responseStatus)
        return (<Loader />);
    } else if (responseStatus === status.success) {
        console.log('responseStatus')
        console.log(responseStatus)
        return (
            <ScrollView>
                {questions.map(({ id, quiz_id, wording, is_multiple_choice, image, text, choices, setFalseAllChoices }: IQuestionTypes) => {
                    return <Question
                        id={id}
                        quiz_id={quiz_id}
                        wording={wording}
                        is_multiple_choice={is_multiple_choice}
                        image={image}
                        text={text}
                        choices={choices}
                        setFalseAllChoices={setFalseAllChoices}
                    />
                }
                )}
                <Button
                    title='Send Answers'
                    onPress={() => {
                        sendAnswers(user)
                    }}
                />
            </ScrollView>
        )
    } else if (responseStatus === status.error) {
        return (<Text>Error</Text>);
    }
}

export default observer(TestScreen);
