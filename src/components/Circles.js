import React from 'react'
import { View } from 'react-native'

export default function Circle({left, top}){
    return(
        <View style={{
            position:'absolute',
            width:110,
            height:110,
            borderRadius:100,
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            left:left,
            top:top
        }}></View>
    );
}