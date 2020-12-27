import React from 'react'
import { CheckBox, StyleSheet, Text, View } from 'react-native'
import { IChoiceTypes } from '../../models/ChoicesModel/IChoices'

const CheckBoxComponent: React.FC<IChoiceTypes> = ({ id, isSelected, text, toggleSelect }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', padding: 5 }}>
            <CheckBox
                onChange={toggleSelect}
                value={isSelected}
            />
            <Text>{text}</Text>
        </View>
    )
}

export default CheckBoxComponent

const styles = StyleSheet.create({})
