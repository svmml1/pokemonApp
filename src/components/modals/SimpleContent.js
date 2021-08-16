import React, { useRef, forwardRef} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import { Modalize } from 'react-native-modalize';
import faker from 'faker';
import iconClaw from '../../assets/icon_claw.png'
import { useCombinedRefs } from '../../utils/use-combined-refs';
import Card from '../Card/Card';
import {height} from '../../assets/constants';
import styles from '../../screens/Home/style'
import commonStyles from '../../styles/commonStyles';
import {customColor, textColor} from '../../assets/colors';

export const SimpleContent = forwardRef((_, ref) => {
  const pokemons = [1, 2, 3, 4, 5, 6, 7];
  const modalizeRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);

  const renderContent = () => [
    <View style={s.content__header} key="0">
      <View>

      </View>
      <Text style={s.content__heading}>Article title</Text>
      <Text style={s.content__subheading}>November 11st 2018</Text>
    </View>,

    <View style={s.content__inside} key="1">
      <Text style={s.content__paragraph}>{faker.lorem.paragraphs(4)}</Text>
      <Text style={[s.content__subheading, { marginTop: 30 }]}>Horizontal ScrollView</Text>

      <View
        style={{...commonStyles.container, paddingBottom: 50, marginTop: 10}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
          data={pokemons}
          renderItem={({item}) => <Card item={item} />}
        />
      </View>

      <Text style={s.content__paragraph}>{faker.lorem.paragraphs(5)}</Text>

      <TextInput
        style={s.content__input}
        placeholder="Type your username"
        clearButtonMode="while-editing"
      />
    </View>,
  ];

  return (
    <Modalize
      ref={combinedRef}
      handlePosition="inside"
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        stickyHeaderIndices: [0],
      }}
    >
      
      {renderContent()}
    </Modalize>
  );
});

const s = StyleSheet.create({
  content__header: {
    padding: 15,
    paddingBottom: 0,

    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  content__heading: {
    marginBottom: 2,

    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },

  content__subheading: {
    marginBottom: 20,

    fontSize: 16,
    color: '#ccc',
  },

  content__inside: {
    padding: 15,
  },

  content__paragraph: {
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666',
  },

  content__scrollview: {
    marginVertical: 20,
  },

  content__block: {
    width: 200,
    height: 80,

    marginRight: 20,

    backgroundColor: '#ccc',
  },

  content__input: {
    paddingVertical: 15,
    marginBottom: 10,

    width: '100%',

    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#cdcdcd',
    borderRadius: 6,
  },
  searchContainer: {
    ...commonStyles.row,
    marginVertical: 15,
    backgroundColor: customColor.input,
    borderRadius: 10,
    paddingLeft: 15,
  },
});
