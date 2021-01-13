import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import QuestionScreen from '../Screens/QuestionScreen';
import { useStore } from '../../hooks/useStore';
import TestListType from '../../models/TestListModel/TestListTypes';
import ITestTypes from '../../models/TestModel/ITestTypes';
import status from '../../enum/status';
import User from '../../models/UserModel/UserTypes';
import { IQuestionTypes } from '../../models/QuestionModel/IQuestionTypes';
import Loader from '../../components/Loader';


export default ({ route, navigation }: any) => {
    const { fetchQuestions, id }: ITestTypes = route.params;
    const responseStatus: status = (useStore('TestListStore').test_list.filter(i => i.id === id)[0].status!);
    // const sendAnswers: any = (useStore('TestListStore').test_list.filter(i => i.id === id)[0].sendAnswers);
    // const user: User = useStore('UserStore');
    const questions: IQuestionTypes[] = (useStore('TestListStore').test_list.filter(i => i.id === id)[0].questions!);

    React.useEffect(() => {
        fetchQuestions(id);
    }, [])
    console.log(responseStatus);
    const Drawer = createDrawerNavigator();
    if (responseStatus === status.pending) {
        return (<Loader />);
    } else if (responseStatus === status.success) {
        console.log(questions);
        return (<Drawer.Navigator>
            <ScrollView>
                {route.params.questions.map((i: any) => <Drawer.Screen name="Question" component={QuestionScreen} />)}
                <Drawer.Screen name="Question" component={QuestionScreen} />
            </ScrollView>
        </Drawer.Navigator>



        )
    } else if (responseStatus === status.error) {
        return (<Text>Error</Text>);
    }
}