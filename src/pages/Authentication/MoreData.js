import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView } from 'react-native'

import ThreeCircles from '../../components/ThreeCircles'
import Circle from '../../components/Circles'

function MoreData(){
    const [inputs, setInputs] = useState([
        {
            placeholder:"Nome do estabelecimento",
            maxLength:40
        },
        {
            placeholder:"Nome Completo",
            maxLength:50
        },
        {
            placeholder:"Rua",
            maxLength:50
        },
        {
            placeholder:"Número",
            maxLength:10
        },
        {
            placeholder:"Complemento",
            maxLength:50
        },
        {
            placeholder:"Cidade",
            maxLength:20
        },
        {
            placeholder:"Telefone/Celular",
            maxLength:15
        },
        {
            placeholder:"CPF",
            maxLength:14
        },
        {
            placeholder:"CNPJ",
            maxLength:25
        },
        {
            placeholder:"Redes Sociais",
            maxLength:20
        },
    ])

  return(
    <KeyboardAvoidingView style={styles.BackGround} behavior="position">
        <ThreeCircles left={-140} top={-180} rotation={'-90deg'}/>
        <Circle left={350} top={130}/>

        <Text style={styles.OutsideText}>Falta pouco para finalizar</Text>
        <Text style={styles.OutsideText2}>seu cadastro!</Text>

        <View style={styles.WhiteRectangle}>
        <Text style={styles.InsideText1} >Adicione algumas informações que ficarão visíveis para outros usuários.</Text>
        <Text style={{
            fontFamily:'serif',
            fontSize:15.5,
            textAlign:'center',
            width:320,
            marginTop:10
        }} >Dica: Quanto mais informações, mais confiança seu perfil passa.</Text>

        <FlatList 
            data={inputs}
            keyExtractor={text => text.placeholder}
            renderItem={
                ({item }) => 
                <TextInput onChangeText={()=>{}} style={styles.Input} placeholder={item.placeholder} placeholderTextColor={'#FF914D'} maxLength={item.maxLength}/>
            }
            showsVerticalScrollIndicator={false}
        />
        
        <TouchableOpacity style={styles.Button}>
            <Text style={{
            color:'#fff',
            fontSize:18,
            fontFamily:'serif'
            }}>Finalizar Cadastro</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
}

export default MoreData;

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
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
        marginTop:40,
        marginBottom:5,
        
        width:380
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

        width:360,
        height:60,
        marginBottom:65,
        marginTop:15,

        backgroundColor:'#FF914D',
        borderRadius: 12,
        
        shadowColor: 'rgba(0, 0, 0, 1);',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
  
        borderColor:'#ddd'
      }
})