import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    flex: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 40,
    },
    text: {
        color: colors.light,
        textAlign: 'center', // Center the text horizontally
        fontSize: 22,
        flex: 1, // Ensure the text takes the remaining space
    }, 
    backButtonContainer: {
        position: 'absolute',
        top: 20, 
        left: 20, 
        zIndex: 1,
    },
    buttonGroupContainer: {
        bottom: 40,
        height: 50,
        backgroundColor: colors.medium,
        borderColor: colors.gold
      },
      button: {
        backgroundColor: colors.dark,
        borderColor: colors.gold
      },
      selectedButton: {
        backgroundColor: colors.gold,
      },
      buttonText: {
        color: colors.gold,
        fontSize: 16,
        
      }
})

export default styles