import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 57,
    borderRadius: 8,
    
    backgroundColor: '#83CBFF'
  },
  title: {
    flex: 1,

    fontSize: 15,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,

  },
  icon: {
    width: 24,
    height: 18
  }
});