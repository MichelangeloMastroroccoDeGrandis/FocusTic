import { StyleSheet } from "react-native";
import buttonStyles from "./ButtonStyle";

const createStyles = (colors) =>
  StyleSheet.create({
    ...buttonStyles(colors),
  })

export default createStyles
