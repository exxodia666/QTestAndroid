import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


type WordingComponentType = {
    wording: string
}
const WordingComponent: React.FC<WordingComponentType> = ({ wording }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {wording}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        borderWidth: 0.5
    },
    text: {
        fontSize: 20,
    }
})


export default WordingComponent
