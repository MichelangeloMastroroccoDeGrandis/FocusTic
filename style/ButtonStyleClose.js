import { Dimensions } from 'react-native';

const createButtonStyleClose = (colors) =>
  ({
    button: {
      marginTop: 20,
      width: Dimensions.get('window').width * 0.6,
      backgroundColor: colors.dark,
      borderWidth: 1,
      borderColor: colors.gold,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      paddingVertical: 10,
      alignSelf: 'center',
    },
    buttonText: {
      color: colors.light,
      fontSize: 16,
    },
  });

export default createButtonStyleClose;
