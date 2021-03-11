import React from 'react';
import { Text, View, BackHandler } from 'react-native'

export default function Menu({navigation}) {
  BackHandler.addEventListener('hardwareBackPress', ()=>{return true})
  return(
    <View>
      <Text>Menu Principal</Text>
    </View>
  )
}
