import { observer } from 'mobx-react-lite';
import React from 'react'
import { View, Text, Image, CheckBox, StyleSheet, Dimensions } from 'react-native'
import { IQuestionTypes } from '../../models/QuestionModel/IQuestionTypes'
import CheckBoxComponent from './CheckBoxComponent';
import ImageComponent from './Image';
import TextComponent from './TextComponent';
import WordingComponent from './WordingComponent';

const Question: React.FC<IQuestionTypes> = ({
    id,
    quiz_id,
    wording,
    text,
    image,
    is_multiple_choice,
    choices,
    setFalseAllChoices }) => {
    //console.log(image.length && true);
    const handleChoices = () => {
        setFalseAllChoices();
    }
    console.log(image)
    return (
        <View style={styles.container}>
            <View>
                {image && Boolean(image.picture.length) && <ImageComponent image={`http://134.249.181.40:7777${image.picture}`} />}
                <WordingComponent wording={wording} />
                {Boolean(text.length) && <TextComponent text={text} />}
                {choices.map(item =>
                    <CheckBoxComponent
                        key={item.id}
                        question_id={item.question_id}
                        id={item.id}
                        isSelected={item.isSelected}
                        toggleSelect={item.toggleSelect}
                        text={item.text}
                        setFalseAllChoices={handleChoices}
                    />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 5,
        // height: Dimensions.get('screen').height * 0.75,
        borderWidth: 1,
        borderRadius: 5
    }
})


export default observer(Question);
