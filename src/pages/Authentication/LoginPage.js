import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import ThreeCircles from '../../components/ThreeCircles'
import Circle from '../../components/Circles'

function LoginPage(){
  const [Email, setEmail] = useState(0)
  const [Password, setPassword] = useState("")
  return(
    <View style={styles.BackGround}>
        <ThreeCircles left={-140} top={-180} rotation={'-90deg'}/>
        <Circle left={350} top={130}/>

        <AntDesign name="leftcircleo" size={30} color="#fff" style={{
          position:'absolute',
          top:90,
          left:15
        }} onPress={()=>{}}/>

        <Text style={styles.OutsideText}>Bem vindo ao Teko,</Text>
        <Text style={styles.OutsideText2}>seu catálogo de serviços.</Text>

        <View style={styles.WhiteRectangle}>
          <Text style={styles.InsideText1} >Faça login na sua conta para acessar a comunidade!</Text>
          <Text style={styles.InsideText2} >Como deseja continuar?</Text>

          <TextInput onChangeText={event =>{setEmail(event)}} placeholder="Email" style={styles.Input} placeholderTextColor={'#FF914D'} maxLength={50} textContentType="emailAddress" keyboardType='email-address' />
          <TextInput onChangeText={(event)=>{setPassword(event)}} placeholder="Senha" style={styles.Input} placeholderTextColor={'#FF914D'} maxLength={50} secureTextEntry/>

          <Text style={{
            fontFamily:'serif',
            fontSize:18,
            textAlign:'center',
            color:'rgba(0,0,0,0.75)',
            marginTop:25,
            marginBottom:25
          }}>Ou use as redes sociais:</Text>

          <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:250
          }}>
            <Text onPress={()=>{}}><FontAwesome5 name="google" size={40} color={'red'}/></Text>
            <Text onPress={()=>{}}><FontAwesome5 name="facebook-square" size={40} color="blue"/></Text>
            <Text onPress={()=>{}}><FontAwesome5 name="twitter" size={40} color="#00acee" /></Text>
            <Text onPress={()=>{}}><FontAwesome5 name="linkedin" size={40} color="#0e76a8" /></Text>
          </View>
          
          <View style={{
            flexDirection:'row'
          }} >
            <Text style={{
              fontFamily:'serif',
              fontSize:18,
              textAlign:'center',
              color:'rgba(0,0,0,0.75)',
              marginTop:35,
              marginBottom:5
            }}>Novo por aqui? </Text><Text style={{
              textDecorationLine:'underline',
              fontFamily:'serif',
              fontSize:18,
              textAlign:'center',
              color:'rgba(0,0,0,0.75)',
              marginTop:35,
              marginBottom:5
            }} onPress={()=>{}}>Cadastre-se</Text>
          </View>

          <Text style={{
            textDecorationLine:'underline',
            fontFamily:'serif',
            fontSize:16
          }} onPress={()=>{}}>Esqueci minha senha.</Text>

          
          <TouchableOpacity style={styles.Button}>
            <Text style={{
              color:'#fff',
              fontSize:18,
              fontFamily:'serif'
              }}>Entrar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
    BackGround:{
      backgroundColor:"#FF914D",
      width:'100%',
      height:'100%',
      flex:1
    },
    WhiteRectangle:{
      backgroundColor:"#fff",
      width:'100%',
      height:740,
      borderTopLeftRadius:70,
      borderTopRightRadius:70,
      top:'7%',

      alignItems:'center'
    },
    OutsideText:{
      color:'#fff',
      alignSelf:'center',
      fontSize:23,
      fontFamily:'serif',
      marginTop:75
    },
    OutsideText2:{
      color:'#fff',
      alignSelf:'center',
      fontFamily:'serif',
      fontSize:23,
    },
    InsideText1:{
      fontFamily:'serif',
      fontSize:20,
      textAlign:'center',
      marginTop:60,
      marginBottom:5,

      width:300
    },
    InsideText2:{
      fontFamily:'serif',
      fontSize:18,
      textAlign:'center',
      color:'rgba(0,0,0,0.75)'
    },
    Input:{
      width:390,
      height:62,
      borderRadius:37,
      marginTop:25,
      borderColor:'#FF914D',
      borderWidth:1.5,

      fontSize:18,
      fontFamily:'serif',
      paddingLeft:25
    },
    Button:{
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',

      marginTop: 40,

      width:360,
      height:60,

      backgroundColor:'#FF914D',
      borderRadius: 12,
      
      shadowColor: 'rgba(0, 0, 0, 1);',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,

      borderColor:'#ddd'
    }
})