import React, {useRef, useState, useEffect} from 'react'

import { View, Text, ImageBackground, Image, Pressable, Animated, Alert, Modal, StyleSheet, FlatList } from 'react-native'

import { styles } from './style'
import {Button} from '../../components/Button' 
import { AlwaysOpen } from '../../components/modals/AlwaysOpen'
import { ButtonVerTodos } from '../../components/buttonVerTodos/Button'
import { SimpleContent } from '../../components/modals/SimpleContent'
import { Modalize } from 'react-native-modalize';

export function Home(){
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  
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
      <View style={{backgroundColor: '#fff', width: 100, height: 40, marginLeft: 36, borderRadius: 18, }}>
        <Image
        style={{borderRadius: 8}} 
        source={require('../../assets/Mapa.png')}
        />
        <View style={{backgroundColor: '#fff', width: 100, height: 26, borderRadius: 8, marginTop: 8,justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ color: '#6A6A6A', fontWeight: 'bold', fontSize:14}} >Veridiana</Text>
        </View>
       
      </View>
    </View>
    
    <View style={{backgroundColor: '#fff',  width: 80, height: 30, marginTop: 8, marginLeft: 16, justifyContent: 'center', borderRadius: 8, alignItems: 'center' }}>
    <Text>Opções</Text>
    </View>
    <View style={{ height: 200}}>

    </View>
    <View style={{ height: 200, alignItems: 'center'}}>
      <Pressable
      
      style={{ 
        width: 300,
        height: 57,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3290D5',
        marginTop: 16
      }}
      >
        <Text style={{color: '#fff'}}>Ir para região de caça</Text>
      </Pressable>

      <Pressable
      onPress={onOpen}
      style={{ 
        width: 300,
        height: 57,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
        marginTop: 16
      }}
      >
        <Text style={{color: '#6A6A6A'}}>Ver Pokémons da região</Text>
      </Pressable>
     
    </View>
    
    <SimpleContent ref={modalizeRef}/>
      
    </ImageBackground>
  )
}

