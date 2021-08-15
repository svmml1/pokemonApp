import React from 'react'

import { View, Text, ImageBackground, Pressable } from 'react-native'
import { Button } from '../../components/Button'
import { Button2 } from '../../components/Button2'

export function Login() {
  return (
    <ImageBackground
      source={require('../../assets/BG.png',)}
      style={{ width: '100%', height: '100%' }}
    >
      <View
        style={{
          width: 320,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',  marginTop: 350, marginLeft: 20
        }}>
        <View>
          <Pressable 
          style={{ width: 300,
            height: 57,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#83CBFF'}}
          >
            <Text>Começar agora minha aventura</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
           style={{ 
            width: 300,
            height: 57,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            marginTop: 16
          }}
          >
            <Text>Saber mais sobre esse mundo</Text>
          </Pressable>
        </View>
      </View>


    </ImageBackground>
  )
}