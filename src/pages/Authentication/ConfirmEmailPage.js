import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, BackHandler } from 'react-native'

import ThreeCircles from '../../components/ThreeCircles'
import Circle from '../../components/Circles'
import EmailConfirmation from '../../components/EmailConfirmation'

function ConfirmEmailPage({navigation}) {
  BackHandler.addEventListener('hardwareBackPress', ()=>{navigation.navigate('SignUp')})
  return(
    <KeyboardAvoidingView style={styles.BackGround} behavior="position">
      <ThreeCircles left={240} top={510} rotation={'35deg'} color={'rgba(255, 182, 137, 0.48);'} />
      <ThreeCircles left={-125} top={-195} rotation={'-90deg'} color={'rgba(255, 182, 137, 0.48);'} />
      <Circle left={-55} top={500} color={'rgba(255, 182, 137, 0.48);'} />

      <EmailConfirmation width={350}  height={250} marginTop={100}/>      
      <View style={{
        alignItems:'center',
        justifyContent:'center'
      }} >
        <Text style={{
          fontFamily:'serif',
          fontSize:22.5,
          marginBottom:15
        }}>Confirme seu endereço de email</Text>

        <Text style={{
          fontFamily:'serif',
          fontSize:16.5,
          marginBottom:10
        }}>Um email de verificação foi enviado para:</Text>

        <Text style={{
          fontFamily:'serif',
          fontSize:16.5,
          fontWeight:'bold',
          marginBottom:10
        }} >asssisantosleandro@gmail.com</Text>
        <Text style={{
          fontFamily:'serif',
          fontSize:16.5,
          textAlign:'center',
          marginBottom:20
        }} >Verifique seu email e clique no link de confirmação para continuar.</Text>
        <Text style={{
          fontFamily:'serif',
          fontSize:17,
          fontWeight:'bold',
          marginBottom:20
        }} >OU</Text>
        <Text style={{
          fontFamily:'serif',
          fontSize:16,
          marginBottom:25
        }}>Insira o código de confirmação:</Text>

        <View style={{
          flexDirection:'row',
        }}>
          <TextInput style={styles.CodeInput} onChange={()=>{}} maxLength={1}/>
          <TextInput style={styles.CodeInput} onChange={()=>{}} maxLength={1}/>
          <TextInput style={styles.CodeInput} onChange={()=>{}} maxLength={1}/>
          <TextInput style={styles.CodeInput} onChange={()=>{}} maxLength={1}/>
          <TextInput style={styles.CodeInput} onChange={()=>{}} maxLength={1}/>
          <TextInput style={styles.CodeInput} onChange={()=>{}} maxLength={1}/>
        </View>

        <Text onPress={()=>{}} style={{
          fontFamily:'serif',
          fontSize:15,
          textDecorationLine:'underline',
          color:'#FF914D',
          marginBottom:20,
          marginTop:10
        }}>Reenviar email de confirmação</Text>

          <TouchableOpacity style={styles.Button} onPress={()=>{navigation.navigate('Find for')}}>
            <Text style={{
              color:'#fff',
              fontSize:18,
              fontFamily:'serif'
              }}>Enviar</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ConfirmEmailPage;

const styles = StyleSheet.create({
  BackGround:{
    backgroundColor:"#fff",
    width:'100%',
    height:'100%',
    flex:1
  },
  Image:{
    alignSelf:'center',
    width:350,
    height:250,
    marginTop: 125
  },
  CodeInput:{
    width:60,
    height:90,
    borderColor:'#FF914D',
    borderWidth:1.5,
    borderRadius:10,
    marginLeft:5,


    textAlign:'center',
    fontSize:30
  },
  Button:{
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',

    width:360,
    height:60,

    backgroundColor:'#FF914D',
    borderRadius: 12,
                
    shadowColor: 'rgba(0, 0, 0, 0.2);',
    shadowRadius: 2,
    shadowOffset:{width: 360, height:20},
    elevation: 3,

    borderColor:'#ddd'
  }
})