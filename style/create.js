import { StyleSheet } from "react-native";
const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.dark,
      position: 'relative',
    },
    listContainer: {
      flex: 1,
      paddingBottom: 60,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
    },
    button: {
      flex: 1,
      backgroundColor: colors.gold,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      paddingVertical: 10,
    },
    qrButton: {
      flex: 1,
      backgroundColor: colors.gold,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      paddingVertical: 10,
      flexDirection: 'row',
      gap: 5,
    },
    buttonText: {
      color: colors.dark,
      fontSize: 16,
    },
  });

export default createStyles;
