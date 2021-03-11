import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Circle from '../../components/Circles'
import ThreeCircles from '../../components/ThreeCircles'
import logotipo from '../../../assets/Logotipo.png'

export default function LandingPage(){
    return(
        <View style={styles.BackGround}>
            <ThreeCircles left={240} top={540} rotation={'35deg'}/>
            <ThreeCircles left={50} top={379} rotation={'-87deg'}/>
            <ThreeCircles left={-140} top={-180} rotation={'-90deg'}/>
            <Circle left={-55} top={550}/>

            <Image
                source={logotipo}
                style={styles.LogoPhoto}
            />

            <Text style={styles.LogoText}>Encontre profissionais e clientes na nossa comunidade.</Text>
            
            <TouchableOpacity
                style={{
                alignItems:'center',
                alignSelf:'center',
                justifyContent:'center',
        
                top:'18%',
                marginBottom:18,
                width:360,
                height:60,
        
                backgroundColor:'rgba(255, 173, 77, 1);',
                borderRadius: 12,
                
                shadowColor: 'rgba(0, 0, 0, 1);',
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
        
                borderColor:'#ddd'
            }}
                onPress={()=>{}}
                activeOpacity={0.8}
            >
                <Text style={{
                     color:'#fff',
                     fontSize:18,
                     fontFamily:'serif'
                }}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                alignItems:'center',
                alignSelf:'center',
                justifyContent:'center',

                top:'18%',
                marginBottom:18,
                width:360,
                height:60,

                backgroundColor:'rgba(255, 255, 255, 0.95);',
                borderRadius: 12,
                
                shadowColor: 'rgba(0, 0, 0, 0.2);',
                shadowRadius: 2,
                shadowOffset:{width: 360, height:20},
                elevation: 3,

                borderColor:'#ddd'
            }}
                onPress={()=>{}}
                activeOpacity={0.8}
            >
                <Text style={{
                     color:'#000000',
                     fontSize:18,
                     fontFamily:'serif'
                }}>
                    Cadastre-se
                </Text>
            </TouchableOpacity>

            <View style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Text style={{
                alignSelf:'center',
                top:160,
                marginBottom:8,
                color:"#fff"
            }} >Quer saber mais sobre nós? </Text>

            <Text style={{
                alignSelf:'center',
                top:160,
                marginBottom:8,
                color:"#fff",
                textDecorationLine:'underline'
            }} onPress={()=>{}}>Clique aqui!</Text>
            </View>

            <Text style={{
                alignSelf:'center',
                top:160,
                marginBottom:8,
                textDecorationLine:'underline'
            }} onPress={()=>{}} >Termos e condições de serviço.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    BackGround:{
        backgroundColor:"#FF914D",
        width:'100%',
        height:'100%',
    },
    LogoPhoto:{
        width: 150,
        height:250,
        padding:20,
        top:'20%',
        alignSelf:'center',

    },
    LogoText:{
        fontFamily:'serif',
        fontSize:16,
        color:'#fff',

        textAlign:'center',
        alignSelf:'center',
        margin:30,
        marginTop:130
    },
  });