import { observer } from 'mobx-react-lite';
import React from 'react'
import { View, Text, Image, CheckBox } from 'react-native'
import { IQuestionTypes } from '../../models/QuestionModel/IQuestionTypes'
import CheckBoxComponent from './CheckBoxComponent';

const Question: React.FC<IQuestionTypes> = ({
    id,
    quiz_id,
    wording,
    text,
    image,
    is_multiple_choice,
    choices }) => {
    //console.log(image.length && true);
    return (
        <View>
            <View>
                {Boolean(image.length) && (<Image
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    source={{ uri: image }}
                />)}
                <Text>{wording}</Text>
                {Boolean(text.length) && <Text>{text}</Text>}
                {choices.map(item =>
                    <CheckBoxComponent
                        question_id={item.question_id}
                        id={item.id}
                        isSelected={item.isSelected}
                        toggleSelect={item.toggleSelect}
                        text={item.text}
                    />
                )}
            </View>
        </View>
    )
}

export default observer(Question);
