import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LottieView from 'lottie-react-native'

import Circle from '../components/Circles'
import ThreeCircles from '../components/ThreeCircles'
import logotipo from '../../assets/Logotipo.png'

import orange2 from '../../assets/866-orange-loading.json'

export default function LoadingPage(){
    return(
        <View style={styles.BackGround}>
            <ThreeCircles left={240} top={540} rotation={'35deg'}/>
            <ThreeCircles left={50} top={379} rotation={'-87deg'}/>
            <ThreeCircles left={-140} top={-180} rotation={'-90deg'}/>
            <Circle left={-55} top={550}/>
       
            <LottieView source={orange2} autoPlay aytoSize onAnimationFinish={()=>{}} duration={2500} style={{
                bottom:'15%'
            }}/>

            <Image
                source={logotipo}
                style={styles.LogoPhoto}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    BackGround:{
        backgroundColor:"#FF914D",
        width:'100%',
        height:'100%',
        flex:1,
    },
    LogoPhoto:{
        width: 150,
        height:250,
        padding:20,
        top:'67%',
        alignSelf:'center',

    },
  });