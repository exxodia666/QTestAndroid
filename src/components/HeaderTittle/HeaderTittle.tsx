import React from 'react'
import { View, Text } from 'react-native'
import HeaderTitleTypes from './HeaderTitleTypes'

const HeaderTittle: React.FC<HeaderTitleTypes> = ({ name }) => {
    return (
        <View style={{
            padding: 0,
            backgroundColor: '#414141',
            flexDirection: 'row',
            //justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <Text style={{
                fontWeight: 'bold',
                color: '#FF6161',
                fontSize: 20
            }}
            >
                {name[0].toUpperCase()}
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}
            >
                {name.slice(1).toUpperCase()}
            </Text>
        </View>
    )
}

export default HeaderTittle
