import { StyleSheet } from "react-native";
import buttonStyles from "./ButtonStyle";
import { Dimensions } from "react-native";


const createStyles = (colors) =>
  StyleSheet.create({
    text: {
      color: colors.light,
      textAlign: 'left',
      fontSize: 18,
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
