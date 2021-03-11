import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, BackHandler } from 'react-native'
import { Entypo } from '@expo/vector-icons';

import ThreeCircles from '../../components/ThreeCircles'
import Circle from '../../components/Circles'

import DogWalking from '../../components/DogWalking'
import SpecialEvent from '../../components/SpecialEvent'
import Barber from '../../components/Barber'
import OnlineJob from '../../components/OnlineJob'

export default function JobTypePage({ navigation }) {
    BackHandler.addEventListener('hardwareBackPress', ()=>{navigation.navigate('Find for')})

    function handlePress(){
        navigation.navigate('More Data', { path:'Job Type' })
    }

  return(
      <View style={styles.BackGround}>
        <ThreeCircles left={230} top={520} rotation={'35deg'}/>
        <ThreeCircles left={50} top={150} rotation={'-87deg'}/>
        <Circle left={-55} top={650}/>

        <Text style={{
            fontFamily:'serif',
            color:'#fff',
            fontSize:27,
            marginTop:120,
            alignSelf:'center',
            textAlign:'center',
        }}>Qual é o seu tipo de atividade?</Text>

        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'space-between',
            width:375,
            marginTop:50
        }}>
        <TouchableOpacity activeOpacity={0.6} style={styles.WhiteContainer} onPress={()=>{handlePress()}}>
            <DogWalking width={170} height={140} marginTop={13}/>
            <Text style={styles.InsideText}>Serviços Presenciais</Text>
            <Text style={styles.Description}>(diarista, pedreiro, cuidador, jardineiro,...)</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.WhiteContainer} onPress={()=>{handlePress()}}>
            <SpecialEvent width={170} height={140} marginTop={13} />
            <Text style={styles.InsideText}>Loja 1</Text>
            <Text style={styles.Description}>(restaurante, sacolão, padaria, mercado,...)</Text>
        </TouchableOpacity>
        </View>
        
        <View style={{
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'space-between',
            width:375,
            marginTop:25
        }}>
        <TouchableOpacity activeOpacity={0.6} style={styles.WhiteContainer} onPress={()=>{handlePress()}}>
            <Barber width={170} height={140} marginTop={13}/>
            <Text style={styles.InsideText}>Loja 2</Text>
            <Text style={styles.Description}>(manutenção, barbearia, salão de beleza,...)</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} style={styles.WhiteContainer} onPress={()=>{handlePress()}}>
            <OnlineJob width={170} height={140} marginTop={13}/>
            <Text style={styles.InsideText}>Serviços Online</Text>
            <Text style={styles.Description}>(design, programação, traduções,...)</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={{flexDirection:'row',marginLeft:15,marginTop:15, alignItems:'center'}} onPress={()=>{}} >
        <Entypo name="info-with-circle" size={32} color="#fff"/>
        <Text style={{
            fontFamily:'serif',
            fontSize:17,
            color:'#fff'
        }}> Informações</Text>
        </TouchableOpacity>
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
        fontSize:15,
        marginTop:10,
        fontWeight:'bold'
    },
    Description:{
        fontFamily:'serif',
        fontSize:13,
        marginTop:3,
        textAlign:'center',
        width:170
    }
})