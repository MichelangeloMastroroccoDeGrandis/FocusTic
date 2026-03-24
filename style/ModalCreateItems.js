import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import buttonStyles from "./ButtonStyle";

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: Dimensions.get('window').width * 0.9,
      marginHorizontal: 10,
      marginTop: 60,
      backgroundColor: colors.medium,
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
      color: colors.light,
    },
    input: {
      height: 40,
      backgroundColor: colors.medium,
      borderColor: colors.gold,
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      borderRadius: 5,
      color: colors.light,
    },
    ...buttonStyles(colors),
  });

export default createStyles;
