import { observer } from 'mobx-react-lite';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { result } from '../../models/UserModel/UserTypes';

const ResultComponent: React.FC<result> = ({ quiz_name, rating, pass_date }) => {
    return (
        <View style={styles.container}>
            <Text>{quiz_name}</Text>
            <Text>{rating}</Text>
            <Text>{pass_date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    }
})


export default ResultComponent;