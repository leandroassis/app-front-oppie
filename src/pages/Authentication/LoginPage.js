import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import * as yup from 'yup'
import { Formik } from 'formik'

import ThreeCircles from '../../components/ThreeCircles'
import Circle from '../../components/Circles'
import api from '../../services/api'

function LoginPage({ navigation }){
  const [loading, setLoading] = useState(false)

  const ref_input2 = useRef()

  async function submitToAPI(values, isValid){
    if(isValid){
      setLoading(true)
      const Data = {
        email: values.email,
        password: values.password
      }
      console.log(Data)
    }
  }

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Insira um email válido.")
      .required("Email é obrigatório."),
    password: yup
      .string()
      .min(8, ({min}) => `Senha deve conter ao menos ${min} dígitos.`)
      .max(8, ({max}) => `Senha deve conter no máximo ${max} dígitos.`)
      .required('Senha é obrigatório.')
  })
  
  return(
    <View style={styles.BackGround}>
        <ThreeCircles left={-140} top={-180} rotation={'-90deg'}/>
        <Circle left={350} top={130}/>

        <AntDesign name="leftcircleo" size={30} color="#fff" style={{
          position:'absolute',
          top:90,
          left:15
        }} onPress={()=>{navigation.navigate('Landing Page')}}/>

        <Text style={styles.OutsideText}>Bem vindo ao Teko,</Text>
        <Text style={styles.OutsideText2}>seu catálogo de serviços.</Text>

        <View style={styles.WhiteRectangle}>
          <Text style={styles.InsideText1} >Faça login na sua conta para acessar a comunidade!</Text>
          <Text style={styles.InsideText2} >Como deseja continuar?</Text>
          <Formik 
            validationSchema={validationSchema}
            initialValues={{email:'', password:''}}
            onSubmit={(values, isValid) =>{submitToAPI(values, isValid)}}
          >
          {({handleChange, handleSubmit, values, errors, isValid } )=> (
          <>
          <TextInput
            onChangeText={handleChange('email')}
            placeholder="Email"
            name="email"
            style={styles.Input}
            placeholderTextColor={'#FF914D'}
            maxLength={50}
            textContentType="emailAddress"
            keyboardType='email-address' 
            returnKeyType="next"
            onSubmitEditing={()=>{ref_input2.current.focus()}}
            blurOnSubmit={false}
            value={values.email}
          />
          {errors.email && <Text style={{fontFamily:'serif', fontSize:13, color:'red', alignSelf:'flex-start', marginLeft:15}}>{errors.email}</Text>}
          <TextInput 
            onChangeText={handleChange('password')}
            placeholder="Senha"
            name="password"
            style={styles.Input}
            placeholderTextColor={'#FF914D'}
            maxLength={8}
            secureTextEntry
            returnKeyType="send"
            ref={ref_input2}
            onSubmitEditing={handleSubmit}
            value={values.password}
          />
          {errors.password && <Text style={{fontFamily:'serif', fontSize:13, color:'red', alignSelf:'flex-start', marginLeft:15}}>{errors.password}</Text>}
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
            }} onPress={()=>{navigation.navigate('SignUp')}}>Cadastre-se</Text>
          </View>

          <Text style={{
            textDecorationLine:'underline',
            fontFamily:'serif',
            fontSize:16
          }} onPress={()=>{}}>Esqueci minha senha.</Text>

          
          <TouchableOpacity style={styles.Button} onPress={handleSubmit} disabled={!isValid} >
            { loading ? <ActivityIndicator color="#fff" size={42}/> : <><Text style={{
              color:'#fff',
              fontSize:18,
              fontFamily:'serif'
              }}>Entrar</Text></> }
          </TouchableOpacity>
          </>
          )}
          </Formik>
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