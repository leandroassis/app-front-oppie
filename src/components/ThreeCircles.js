import React from 'react'
import { View } from 'react-native'

import Circles from './Circles'

export default function ThreeCircles({rotation, left, top}){
    return(
        <View style={{transform:[{rotate:rotation}], left:left, top:top }}>
            <Circles left={left+15} top={left+15}/>
            <Circles left={left+85} top={left+15}/>
            <Circles left={left+50} top={left+75}/>
        </View>
    )
}