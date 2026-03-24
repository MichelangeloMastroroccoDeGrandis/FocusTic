import { StyleSheet } from "react-native";
import buttonStyles from "./ButtonStyle";
import { Dimensions } from "react-native";


const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      padding: 10,
      marginHorizontal: 20,
      borderRadius: 10,
      backgroundColor: colors.medium,
    },
    step: {
      color: colors.gold,
      textAlign: 'center',
      fontSize: 22,
      marginVertical: 10,
    },
    image: {
      width: Dimensions.get('window').width * 0.6,
      height: Dimensions.get('window').height * 0.6,
      marginTop: 10,
      borderRadius: 10,
    },
    check: {
      backgroundColor: colors.medium,
    },
    checkText: {
      color: colors.light,
    },
    ...buttonStyles(colors),
  });

export default createStyles;
