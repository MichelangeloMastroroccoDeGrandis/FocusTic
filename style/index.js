import { StyleSheet } from "react-native";
import buttonStyles from "./ButtonStyle";

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: colors.dark,
      paddingBottom: 40,
      paddingTop: 10,
    },
    bottom: {
      flex: 1,
      backgroundColor: colors.dark,
    },
    ...buttonStyles(colors),
  })

export default createStyles
