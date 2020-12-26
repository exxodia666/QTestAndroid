import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TestComponentTypes from './TestComponentTypes'

const TestComponent: React.FC<TestComponentTypes> = (props) => {
    const { id, name, count_questions, selectTest } = props;
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => selectTest(id)}
        >
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{count_questions} Вопрос</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 0.4,
        padding: 10,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16
    }
})


export default TestComponent
