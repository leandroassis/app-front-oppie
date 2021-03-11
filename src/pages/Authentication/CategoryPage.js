import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, BackHandler } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import ThreeCircles from '../../components/ThreeCircles'
import Circle from '../../components/Circles'

import DomesticServices from '../../components/DomesticServices'
import DesignAndIllustrations from '../../components/DesignandIlusttrations'
import BusinessShop from '../../components/BusinessShop'
import Classes from '../../components/Classes'
import Consulting from '../../components/Consulting'
import Food from '../../components/Food'
import MakeUp from '../../components/MakeUp'
import PhotographAndVideos from '../../components/PhotographAndVideos'
import Programmer from '../../components/Programmer'
import Repair from '../../components/Repair'
import Transport from '../../components/Transport'
import WriteAndTranslation from '../../components/WriteAndTranslation'

export default function CategoryPage({navigation}) {
  const [isFocus, setFocus] = useState(false)
  const [tags, AddTag] = useState([
    {
      title:"Design "
    },
    {
      title:"Programação "
    },
  ])

  const [categories, setCategories] = useState([
    {
        title:"Serviços Domésticos",
        description:"Diarista, Encanador, Cuidador, Pedreiro, ...",
        component:<DomesticServices/>
    },
    {
        title:"Design e Ilustrações",
        description:"Design, Web Design, Ilustradores, Artistas, ...",
        component:<DesignAndIllustrations/>
    },
    {
        title:"Comércio e Venda",
        description:"Mercado, Lojas, Sacolão, Padaria, ...",
        component:<BusinessShop/>
    },
    {
        title:"Aulas e Monitorias",
        description:"Aulas, Explicadores, Linguistas, ...",
        component:<Classes/>
    }, 
    {
        title:"Consultoria",
        description:"Engenheiros, Advogados, Arquitetos, ...",
        component:<Consulting/>
    },
    {
        title:"Alimentício",
        description:"Pizzarias, Restaurantes, Lanchonetes, ...",
        component:<Food/>
    },
    {
        title:"Cosméticos e Beleza",
        description:"Cabelereiro, Maquiador, Barbeiro, Depilação, ...",
        component:<MakeUp/>
    },
    {
        title:"Fotografia e Vídeos",
        description:"Edição, Fotógrafo, Manipulaçãode Fotos, ...",
        component:<PhotographAndVideos/>
    },
    {
        title:"Programação e TI",
        description:"Programadores, Analistas de Sistemas, ...",
        component:<Programmer/>
    },
    {
        title:"Manutenção",
        description:"Manutenção Automotiva, Eletrodomésticos, ...",
        component:<Repair/>
    },
    {
        title:"Transporte",
        description:"Chofer, Turismo, Aluguel de Veículos, ...",
        component:<Transport/>
    },
    {
        title:"Escrita e Tradução",
        description:"Redatores(a), Tradutores(a), ...",
        component:<WriteAndTranslation/>
    },
  ])

  BackHandler.addEventListener('hardwareBackPress', ()=>{navigation.navigate('Find for')})

  return(
      <View style={styles.BackGround}>
        <ThreeCircles left={-140} top={-65} rotation={'-87deg'}/>
        <Circle left={350} top={120}/>

        <Text style={{
          fontFamily:'serif',
          fontSize:23,
          color: '#fff',
          textAlign:'center',
          top:75,
          width:370,
          alignSelf:'center'
        }}>Selecione as categorias de serviço relevantes para você.</Text>

        <View style={styles.WhiteRectangle}>

          <TextInput onFocus={()=>{setFocus(!isFocus)}} onSubmitEditing={()=>{setFocus(!isFocus)}} style={styles.Input}>
            {isFocus ? null :  <><FontAwesome name="search" size={17} color="#fff"/><Text> Busque por palavras-chave, categorias, ...</Text></>}
          </TextInput>

          <Text style={{
            fontFamily:'serif',
            fontSize:15.6,
            marginTop:10,
            marginLeft:12,
            marginBottom:10,
            alignSelf:'flex-start'
          }}>Tags selecionadas:</Text>

          <View style={{
            display:'flex',
            alignItems:'flex-start',
            alignSelf:'flex-start',
            flexDirection:'row',
            width:'93%',
            marginLeft:15,
            flexWrap:'wrap'
          }}>
            {tags.map(tag =>(
              <TouchableOpacity key={tag.index} style={{
                flexDirection:'row',
                alignItems:'center',
                backgroundColor:'#FF914D',
                borderRadius:8,
                padding:5,
  
                shadowColor: 'rgba(0, 0, 0, 1);',
                shadowOpacity: 0.7,
                shadowRadius: 2,
                elevation: 4,
  
                marginRight:10,
                marginBottom:10,
                maxWidth:135,
              }} onPress={()=>{}}>
                <Text key={tag.index} style={{
                  fontFamily:'serif',
                  fontSize:15,
                  color:'#fff',
                  maxWidth:110,
                }}>{tag.title}</Text>
                <Ionicons name="md-close-circle-sharp" size={17} color="#fff" style={{
                }}/>
              </TouchableOpacity>
            ))}
          </View>
          
          
          <FlatList data={categories}
            showsVerticalScrollIndicator={false}
            keyExtractor={categ => categ.title}
            renderItem={
                ({item})=>
                <TouchableOpacity activeOpacity={0.6} style={styles.WhiteContainer} key={item.title} onPress={()=>{}}>
                    {item.component}
                    <Text style={styles.InsideText}>{item.title}</Text>
                    <Text style={styles.Description}>{item.description}</Text>
                </TouchableOpacity>
            }
            numColumns={2}
          />

          <TouchableOpacity activeOpacity={0.7} style={styles.Button} onPress={()=>{navigation.navigate('More Data', { path:'Category Type' })}}>
            <Text style={{
              color:'#fff',
              fontSize:18,
              fontFamily:'serif'
              }}>Prosseguir</Text>
          </TouchableOpacity>
        </View>

      </View>
  );
}

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
    top:'11%',

    alignItems:'center'
  },
  Input:{
    width:395,
    height:52,
    borderRadius:37,
    marginTop:45,
    backgroundColor:'rgba(255, 145, 77, 0.47);',    

    fontSize:15.7,
    fontFamily:'serif',
    paddingLeft:20,
    color:'#fff'
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

    alignItems:'center',
    margin:10,
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
    width:180
  },
  Button:{
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    
    marginTop: 15,
    marginBottom:25,

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
