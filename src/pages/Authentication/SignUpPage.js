import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'

import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import ThreeCircles from '../../components/ThreeCircles'
import Circle from '../../components/Circles'


function SignUpPage({ navigation }){
  return(
    <View style={styles.BackGround}>
    <ThreeCircles left={-140} top={-180} rotation={'-90deg'}/>
    <Circle left={350} top={130}/>

    <AntDesign name="leftcircleo" size={30} color="#fff" style={{
      position:'absolute',
      top:110,
      left:10
    }} onPress={()=>{navigation.navigate('Landing Page')}}/>

    <Text style={styles.OutsideText}>Faça seu cadastro e alcance</Text>
    <Text style={styles.OutsideText2}>mais clientes e serviços!</Text>

    <View style={styles.WhiteRectangle}>
      <Text style={styles.InsideText1} >Preencha as informações para criar a sua conta!</Text>

      <TextInput onChangeText={()=>{} }placeholder="Nome de Usuário" style={styles.Input} placeholderTextColor={'#FF914D'} maxLength={50} textContentType="nickname"/>
      <TextInput onChangeText={()=>{}} placeholder="Email" style={styles.Input} placeholderTextColor={'#FF914D'} maxLength={50} textContentType="emailAddress" keyboardType='email-address' />
      <TextInput onChangeText={()=>{}} placeholder="Senha" style={styles.Input} placeholderTextColor={'#FF914D'} maxLength={20} secureTextEntry />
      <TextInput onChangeText={()=>{}} placeholder="Confirme sua Senha" style={styles.Input} placeholderTextColor={'#FF914D'} maxLength={20} secureTextEntry/>

      <Text style={{
        fontFamily:'serif',
        fontSize:18,
        textAlign:'center',
        color:'rgba(0,0,0,0.75)',
        marginTop:20,
        marginBottom:20
      }}>Ou cadastre-se com as redes sociais:</Text>

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
          marginTop:25,
          marginBottom:5
        }}>Já tem uma conta? </Text><Text style={{
          textDecorationLine:'underline',
          fontFamily:'serif',
          fontSize:18,
          textAlign:'center',
          color:'rgba(0,0,0,0.75)',
          marginTop:25,
          marginBottom:5
        }} onPress={()=>{navigation.navigate('Login')}}>Entre!</Text>
      </View>
      
      <TouchableOpacity style={styles.Button} onPress={()=>{navigation.navigate('Confirm Email')}}>
        <Text style={{
          color:'#fff',
          fontSize:18,
          fontFamily:'serif'
          }}>Criar conta</Text>
      </TouchableOpacity>
    </View>
</View>
  );
}

export default SignUpPage;

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
        height:750,
        borderTopLeftRadius:70,
        borderTopRightRadius:70,
        top:'4%',
  
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
        marginTop:30,
        marginBottom:5,
  
        width:300
      },
    Input:{
        width:390,
        height:62,
        borderRadius:37,
        marginTop:15,
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
  
        marginTop: 25,
  
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