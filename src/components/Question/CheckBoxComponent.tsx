import React from 'react'
import { CheckBox, StyleSheet, Text, View } from 'react-native'


type CheckBoxComponentTypes = {
    question_id: string
    id: string
    isSelected: boolean
    text: string
    toggleSelect: () => void
    setFalseAllChoices: () => void
}
const CheckBoxComponent: React.FC<CheckBoxComponentTypes> = ({ id, isSelected, text, toggleSelect, setFalseAllChoices }) => {

    const handleCheckBox = (): void => {
        setFalseAllChoices();
        toggleSelect();
    }
    return (
        <View style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', padding: 5 }}>
            <CheckBox
                onChange={handleCheckBox}
                value={isSelected}
            />
            <Text>{text}</Text>
        </View>
    )
}

export default CheckBoxComponent

const styles = StyleSheet.create({})
