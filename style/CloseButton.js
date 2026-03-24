import { StyleSheet } from "react-native";
import buttonStyleClose from "./ButtonStyleClose";

const createStyles = (colors) =>
  StyleSheet.create({
    ...buttonStyleClose(colors),
  });

export default createStyles;
