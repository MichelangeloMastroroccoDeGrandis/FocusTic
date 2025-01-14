import { StyleSheet, Dimensions } from "react-native";
import buttonStyles from "./ButtonStyle";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'left',
    },
    video: {
      width: width * 0.6,
      height: 275,
    },
    controlsContainer: {
      paddingVertical: 10,
    },
    ...buttonStyles
  });

export default styles