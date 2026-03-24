import { StyleSheet } from "react-native";
import buttonStyles from "./ButtonStyle";
import { Dimensions } from "react-native";


const createStyles = (colors) =>
  StyleSheet.create({
    text: {
      color: colors.light,
      textAlign: 'center',
      fontSize: 22,
    },
    textSmall: {
      color: colors.light,
      textAlign: 'center',
      fontSize: 18,
      paddingVertical: 5,
      paddingTop: 10,
    },
    input: {
      height: 40,
      backgroundColor: colors.medium,
      borderColor: colors.gold,
      borderWidth: 1,
      marginVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      color: colors.light,
    },
    image: {
      width: Dimensions.get('window').width * 0.6,
      height: Dimensions.get('window').height * 0.6,
      marginTop: 10,
      borderRadius: 10,
    },
    check: {
      backgroundColor: colors.medium,
      marginTop: 10,
    },
    checkText: {
      color: colors.gold,
      fontSize: 18,
    },
    timerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    timerInput: {
      marginVertical: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      color: colors.light,
      fontSize: 14,
      width: 80,
      height: 40,
      textAlign: 'center',
    },
    colon: {
      color: colors.light,
      fontSize: 18,
      marginHorizontal: 6,
    },
    ...buttonStyles(colors),
  });

export default createStyles;
