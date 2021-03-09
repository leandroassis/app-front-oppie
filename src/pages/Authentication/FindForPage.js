import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'

import Circle from '../../components/Circles'
import ThreeCircles from '../../components/ThreeCircles'

import NewClient from '../../../assets/undraw_businessman_97x4.png'
import Professionals from '../../../assets/undraw_contract_uy56.png'

export default function FindForPage(){
  return (
    <View style={styles.BackGround}>
        <ThreeCircles left={240} top={540} rotation={'35deg'}/>
        <ThreeCircles left={50} top={270} rotation={'-87deg'}/>
        <ThreeCircles left={-120} top={-110} rotation={'-90deg'}/>
        <Circle left={-55} top={550}/>

        <Text style={{
            fontFamily:'serif',
            color:'#fff',
            fontSize:20,
            top:45,
            left:150
        }}>Realize serviços.</Text>
        <Text style={{
            fontFamily:'serif',
            color:'#fff',
            fontSize:20,
            top:75,
            left:170
        }} >Encontre clientes.</Text>
        <Text style={{
            fontFamily:'serif',
            color:'#fff',
            fontSize:20,
            top:105,
            left:120
        }} >Expanda sua rede.</Text>

        <Text style={{
            fontFamily:'serif',
            color:'#fff',
            fontSize:35,
            top:160,
            alignSelf:'center'
        }}>Busco por:</Text>

        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'space-between',
            width:375,
            top:195
        }}>
        <TouchableOpacity activeOpacity={0.98} style={styles.WhiteContainer}>
            <Image source={Professionals} style={styles.Image}/>
            <Text style={styles.InsideText}>Profissionais.</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} style={styles.WhiteContainer}>
            <Image source={NewClient} style={styles.Image}/>
            <Text style={styles.InsideText}>Novos clientes.</Text>
        </TouchableOpacity>
        </View>

        <Image/>

        {/*Navegação bottom*/}
    </View>
  );
}

const styles = StyleSheet.create({
    BackGround:{
        backgroundColor:"#FF914D",
        width:'100%',
        height:'100%',
    },
    WhiteContainer:{
        width:180,
        height:235,
        backgroundColor:'#fff',
        borderRadius:30,

        shadowColor: 'rgba(0, 0, 0, 1);',
        shadowRadius: 2,
        shadowOffset:{width: 400, height:30},
        elevation: 4,

        alignItems:'center'
    },
    InsideText:{
        fontFamily:'serif',
        fontSize:16,
    },
    Image:{
        width:151,
        height:148,
        top:4
    }
})