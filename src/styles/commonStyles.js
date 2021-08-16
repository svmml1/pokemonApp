import {StyleSheet} from 'react-native';
import {textColor} from '../assets/colors';

const fontFamily = StyleSheet.create({
  bold: {
   
  },
});

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    color: textColor.black,
  
  },
  subHeading: {
    fontSize: 16,
    color: textColor.grey,
  },
  title: {
    fontSize: 26,
    color: textColor.white,
  
  },
  number: {
    fontSize: 12,
    color: textColor.number,
   
  },
});