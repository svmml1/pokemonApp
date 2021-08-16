import React, { useRef } from 'react';
import {  StyleSheet, View, Dimensions, Image, Text,
  Animated, Platform, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Modalize } from 'react-native-modalize';
import faker from 'faker';
import iconClaw from '../../assets/icon_claw.png'

import {ButtonVerTodos} from '../buttonVerTodos/Button'


const DATA = [
  {
    id: '1',
    title: 'Leonardo Cavalcante',
  },
  {
    id: '2',
    title: 'Fernando Livramento',
  },
  {
    id: '3',
    title: 'Sergio Victor',
  },

];

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
export const AlwaysOpen = () => {
  const modalizeRef = useRef(null);

  const handleClose = dest => {
    if (modalizeRef.current) {
      modalizeRef.current.close(dest);
    }
  };

  const Item = ({ title }) => (
    <View style={s.item}>
      <Text style={s.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const renderContent = () => (

    
    
    <View style={s.content}>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
      <Text style={s.content__heading}>Pokemons</Text>
      
      <ButtonVerTodos name="Fechar Pokemons" onPress={() => handleClose('alwaysOpen')} />
      </View>
      <Text style={s.favoriteStyle}>Pokemon</Text>
      <View style={{flex: 1, flexDirection: 'row', marginBottom: 16}}>
    
      </View>
      
     
    </View>
    
  );

  return (
    <Modalize
      
      ref={modalizeRef}
      modalStyle={s.content__modal}
      alwaysOpen={200}
      handlePosition="inside"
    >
      {renderContent()}
    </Modalize>
  );
};

const s = StyleSheet.create({
  content: {
    padding: 20,
    zIndex: 1,
    
  },

  content__modal: {
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    
  },

  content__subheading: {
    marginBottom: 2,

    fontSize: 14,
    fontWeight: '600',
    color: '#ccc',
  },

  content__heading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666',
  },
  cart_layout: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 56,
},
cart_detail: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 52,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
},
icon_claw: {
    position: 'absolute',
    top: 2,
    bottom: 0,
    left: (Screen.width / 2) - 16,
    right: (Screen.width / 2) - 16,
    width: 32,
    height: 6,
},
icon_checkout: {
    width: 16,
    height: 16,
},
icon_cart: {

    width: 22,
    height: 23,
},

favoriteStyle: {
  fontSize: 12,
    fontWeight: '700',
    color: '#737373',
    marginTop: 22,
},

item: {
  width: 150,
  
  backgroundColor: '#3966ae',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius: 8,
},
title: {
  fontSize: 14,
  fontWeight: '700',
  color: '#fff'
},
});
