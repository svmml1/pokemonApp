import React from 'react'

import { View, Text, ImageBackground, Image } from 'react-native'
import { styles } from './style'

export function Home(){
  return(
    <ImageBackground
    source={require('../../assets/bg2.png')}
    style={{width: '100%', height: '100%'}}
    >
      <View style={{flexDirection: 'row', width: '100%', marginLeft: 16, marginTop: 30}}>
    
      <Image
      style={{borderRadius: 8}}  
      source={require('../../assets/avatar.png')}
      />
      <View style={{width: 100, height: 80, marginLeft: 8, }}>
      <View style={{ width: 100, height: 37 , backgroundColor: '#fff', borderRadius: 8}}>
      <Text style={{marginLeft: 8, fontSize: 10}}>Treinador</Text>
      <Text style={{marginLeft: 8, color: '#6A6A6A', fontWeight: 'bold', fontSize:14}}>Sergio Lopes</Text>
      <View style={{ justifyContent: 'space-around',width: 100, height: 16 , backgroundColor: '#fff', borderRadius: 8, marginTop: 8, flexDirection: 'row', }}>
        
        <Image source={require('../../assets/pokebola.png')}/>
        <Image source={require('../../assets/pokebola.png')}/>
        <Image source={require('../../assets/pokebola.png')}/>
        <Image source={require('../../assets/pokebola-vazia.png')}/>
        <Image source={require('../../assets/pokebola-vazia.png')}/>
        <Image source={require('../../assets/pokebola-vazia.png')}/>
        
      </View>
      </View>
      </View>
      <View style={{backgroundColor: '#fff', width: 100, height: 40, marginLeft: 36, borderRadius: 18 }}>
        <Image
        style={{borderRadius: 8}} 
        source={require('../../assets/Mapa.png')}
        />
        <View style={{backgroundColor: '#fff', width: 100, height: 26, borderRadius: 8, marginTop: 8}}>
        <Text style={{marginLeft: 8, color: '#6A6A6A', fontWeight: 'bold', fontSize:14}} >Veridiana</Text>
        </View>
       
      </View>
    </View>
    
    <View style={{backgroundColor: '#fff',  width: 80, marginTop: 8, marginLeft: 16, borderRadius: 8 }}>
    <Text>Opções</Text>
    </View>
    <View>

    </View>
    </ImageBackground>
  )
}