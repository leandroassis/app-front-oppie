import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'

import Circle from '../../components/Circles'
import ThreeCircles from '../../components/ThreeCircles'

import NewClientLogo from '../../components/NewClientLogo'
import Client from '../../components/Clients'
import logo from '../../../assets/Logotipo.png'

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
            top:210
        }}>
        <TouchableOpacity activeOpacity={0.6} style={styles.WhiteContainer} onPress={()=>{}}>
            <NewClientLogo width={170} height={140} marginTop={35} />
            <Text style={styles.InsideText}>Profissionais.</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.WhiteContainer} onPress={()=>{}}>
            <Client width={170} height={140} marginTop={35} />
            <Text style={styles.InsideText}>Novos clientes.</Text>
        </TouchableOpacity>
        </View>

        <Image source={logo} style={styles.ImageLogo}/>

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
        marginTop:20
    },
    ImageLogo:{
        width:250,
        height:190,
        marginTop:270,
        alignSelf:'center',
        borderRadius:100
    }
})