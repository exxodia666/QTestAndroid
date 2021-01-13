import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import TabBarButtonTypes from './TabBarButtonTypes';

const TabBarButton: React.FC = ({ onPress, accessibilityState, name }: TabBarButtonTypes) => {
    const isSelected: boolean = accessibilityState.selected;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isSelected ? '#414141' : 'white',
                borderRadius: 15,
                padding: 5,
                margin: 5
            }}>
            <Icon
                name={name}
                size={24}
                color={isSelected ? 'white' : 'black'}
            />
            <Text style={{ ...(isSelected ? styles.textSel : styles.textNotSel), ...styles.text }}>
                {name[0].toUpperCase() + name.slice(1)}
            </Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    text: {
        margin: 6,
        fontSize: 20
    },
    textSel: {
        color: 'white'
    },
    textNotSel: {
        color: 'black'
    }
})


export default TabBarButton
