import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: Dimensions.get('window').width * 0.95,
      marginHorizontal: 10,
      marginTop: 0,
      backgroundColor: colors.medium,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      padding: 20,
      borderRadius: 0,
    },
    scrollContainer: {
      padding: 20,
    },
  });

export default createStyles;
