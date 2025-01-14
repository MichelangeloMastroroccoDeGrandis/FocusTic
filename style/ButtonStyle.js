import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors'; // Adjust the path as necessary

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    alignSelf: 'center'
  },
  buttonText: {
    color: colors.dark,
    fontSize: 16,
  },
  buttonReverse: {
    marginTop: 20,
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.gold,
    paddingVertical: 10,
    alignSelf: 'center'
  },
  buttonTextReverse: {
    color: colors.light,
    fontSize: 16,
  }
});

export default buttonStyles;
