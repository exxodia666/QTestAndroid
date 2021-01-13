import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'

type ImageComponentTypes = {
    image: string
}

const ImageComponent: React.FC<ImageComponentTypes> = ({ image }) => {
    return (
        <Image
            style={{
                borderBottomRightRadius: 15,
                width: Dimensions.get('screen').width * 0.95,
                minHeight: 240
            }}
            source={{ uri: image }}
        />
    )
}

export default ImageComponent
