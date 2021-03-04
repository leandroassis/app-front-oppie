import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

import {URL_API} from '@env'
//import config from '../../config'

export default function InitialScreen(){
    return(
        <View>
            <Text>{URL_API}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor:'#fff'
    }
  });