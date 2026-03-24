import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import buttonStyles from "./ButtonStyle";

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.medium,
    },
    text: {
      color: colors.gold,
      textAlign: 'center',
      fontSize: 22,
    },
    image: {
      width: Dimensions.get('window').width * 0.6,
      height: Dimensions.get('window').height * 0.6,
      marginTop: 10,
      borderRadius: 10,
    },
    ...buttonStyles(colors),
  });

export default createStyles;
