import React, {useState, useRef} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import ThreeCircles from '../../components/ThreeCircles'
import Circle from '../../components/Circles'

import * as yup from 'yup'
import { Formik } from 'formik'

function SignUpPage({ navigation }){
  const [loading, setLoading] = useState(false)
  const [passwordmatch, setMatch] = useState(true)
  const ref_input2 = useRef()
  const ref_input3 = useRef()
  const ref_input4 = useRef()

  function CompararSenhas(senha1, senha2)
  {
    if(senha1 === senha2)
    {
      return true
    }
    return false
  }

  function SubmitToAPI(values, isValid)
  {
    if(CompararSenhas(values.password, values.password2) && isValid)
    {
      //Chama a API
      setLoading(true)
      setMatch(true)
      navigation.navigate('Confirm Email')
      setLoading(false)
    }
    else{
      setMatch(false)
    }
  }

  const validationSchema = yup.object().shape({
    nomedeusuario: yup
    .string()
    .min(3, ({min}) => `Nome de usuário deve conter ao menos ${min} dígitos.`)
    .max(10, ({max}) => `Nome de usuário deve conter no máximo ${max} dígitos.`)
    .required("Nome de usuário obrigatório."),
    email: yup
      .string()
      .email("Insira um email válido.")
      .required("Email é obrigatório."),
    password: yup
      .string()
      .min(8, ({min}) => `Senha deve conter ao menos ${min} dígitos.`)
      .max(12, ({max}) => `Senha deve conter no máximo ${max} dígitos.`)
      .required('Senha é obrigatório.'),
    password2: yup
      .string()
      .min(8, ({min}) => `Senha deve conter ao menos ${min} dígitos.`)
      .max(12, ({max}) => `Senha deve conter no máximo ${max} dígitos.`)
      .required('Redigite sua senha.'),
  }) 

  return(
    <KeyboardAvoidingView style={styles.BackGround} behavior='padding'>
    <ThreeCircles left={-140} top={-180} rotation={'-90deg'}/>
    <Circle left={350} top={130}/>

    <AntDesign name="leftcircleo" size={30} color="#fff" style={{
      position:'absolute',
      top:110,
      left:10
    }} onPress={()=>{navigation.navigate('Landing Page')}}/>

    <Text style={styles.OutsideText}>Faça seu cadastro e alcance</Text>
    <Text style={styles.OutsideText2}>mais clientes e serviços!</Text>

    <KeyboardAvoidingView style={styles.WhiteRectangle} behavior='padding'>
      <Text style={styles.InsideText1} >Preencha as informações para criar a sua conta!</Text>

      <Formik
      validationSchema={validationSchema}
      initialValues={{nomedeusuario:'', email:'', password:'', password2:''}}
      onSubmit={(values, isValid)=>{SubmitToAPI(values, isValid)}}
      >
      {({handleChange, handleSubmit, values, errors, isValid}) => (
      <>
      <TextInput
      onChangeText={handleChange('nomedeusuario')}
      placeholder="Nome de Usuário"
      style={styles.Input}
      placeholderTextColor={'#FF914D'}
      maxLength={50}
      textContentType="nickname"
      returnKeyType="next"
      onSubmitEditing={()=>{ref_input2.current.focus()}}
      blurOnSubmit={false}
      value={values.nomedeusuario}
      />
      {errors.nomedeusuario && <Text style={{fontFamily:'serif', fontSize:13, color:'red', alignSelf:'flex-start', marginLeft:15}}>{errors.nomedeusuario}</Text>}

      <TextInput
      onChangeText={handleChange('email')}
      placeholder="Email"
      style={styles.Input}
      placeholderTextColor={'#FF914D'}
      maxLength={50}
      textContentType="emailAddress"
      keyboardType='email-address'
      returnKeyType='next'
      ref={ref_input2}
      onSubmitEditing={()=>{ref_input3.current.focus()}}
      blurOnSubmit={false}
      value={values.email}
      />
      {errors.email && <Text style={{fontFamily:'serif', fontSize:13, color:'red', alignSelf:'flex-start', marginLeft:15}}>{errors.email}</Text>}

      <TextInput
      onChangeText={handleChange('password')}
      placeholder="Senha"
      style={styles.Input}
      placeholderTextColor={'#FF914D'}
      maxLength={20}
      secureTextEntry
      returnKeyType='next'
      ref={ref_input3}
      onSubmitEditing={()=>{ref_input4.current.focus()}}
      blurOnSubmit={false}
      value={values.password}
      />
      {errors.password2 && <Text style={{fontFamily:'serif', fontSize:13, color:'red', alignSelf:'flex-start', marginLeft:15}}>{errors.password}</Text>}

      <TextInput
      onChangeText={handleChange('password2')}
      placeholder="Confirme sua Senha"
      style={styles.Input}
      placeholderTextColor={'#FF914D'}
      maxLength={20}
      secureTextEntry
      returnKeyType='send'
      ref = {ref_input4}
      onSubmitEditing={handleSubmit}
      value={values.password2}
      />
      {errors.password2 && <Text style={{fontFamily:'serif', fontSize:13, color:'red', alignSelf:'flex-start', marginLeft:15}}>{errors.password2}</Text>}
      {!passwordmatch && <Text style={{fontFamily:'serif', fontSize:13, color:'red', alignSelf:'flex-start', marginLeft:15}}>A senhas não são iguais.</Text>}

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
          fontWeight:'bold',
          color:'rgba(0,0,0,0.75)',
          marginTop:25,
          marginBottom:5
        }} onPress={()=>{navigation.navigate('Login')}}>Entre!</Text>
      </View>
      
      <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
      { loading && passwordmatch ? <ActivityIndicator color="#fff" size={42}/> : <><Text style={{
              color:'#fff',
              fontSize:18,
              fontFamily:'serif'
              }}>Criar Conta!</Text></> }
      </TouchableOpacity>
      </>
      )} 
      </Formik>
    </KeyboardAvoidingView>
</KeyboardAvoidingView>
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
        marginTop:10,
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