import { StyleSheet } from "react-native";

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.dark,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    flex: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: 40,
    },
    text: {
      color: colors.light,
      textAlign: 'center',
      fontSize: 22,
      flex: 1,
    },
    backButtonContainer: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
    },
    buttonGroupContainer: {
      bottom: 40,
      height: 50,
      backgroundColor: colors.medium,
      borderColor: colors.gold,
    },
    button: {
      backgroundColor: colors.dark,
      borderColor: colors.gold,
    },
    selectedButton: {
      backgroundColor: colors.gold,
    },
    buttonText: {
      color: colors.gold,
      fontSize: 16,
    },
  })

export default createStyles
