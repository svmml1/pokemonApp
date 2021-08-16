import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ButtonVerTodos = ({ onPress, name }) => (
  <TouchableOpacity style={s.button} onPress={onPress} activeOpacity={0.75}>
    <Text style={s.button__text}>{name}</Text>
  </TouchableOpacity>
);

const s = StyleSheet.create({
  button: {
    height: 20,
    width: 125,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center'
  },

  button__text: {
    color: '#3966AE',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 10,
  },
});
