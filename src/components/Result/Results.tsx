import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ResultTypes from '../../models/ResultsModel/ResultTypes';

const ResultComponent: React.FC<ResultTypes> = ({ name, rating, id }) => {

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    }
})


export default ResultComponent
