import React from 'react'
import { ActivityIndicator, View } from 'react-native'

function Loader() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color='red' />
        </View>
    )
}

export default Loader
