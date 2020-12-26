import React from 'react';
import { Button, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native';

export interface Props {
    onChangeText(e: NativeSyntheticEvent<TextInputChangeEventData>): void
}

const InputForm: React.FC<Props> = ({ onChangeText, }) => {
    return (
        <View>
            <TextInput
                placeholder={'Enter Your Name'}
                onChange={onChangeText}
            />
            <Button
                title="Submit"
                onPress={() => true}
                //accessibilityLabel="increment"
                color="blue"
            />

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center'
    },
});

export default InputForm;