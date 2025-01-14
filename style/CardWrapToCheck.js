import { StyleSheet } from "react-native";
import buttonStyles from "./ButtonStyle";
import colors from "./colors";
import { Dimensions } from "react-native";


const styles = StyleSheet.create({

    container: {
        padding: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: colors.medium,
    },   
    step: {
        color: colors.gold,
        textAlign: 'center',
        fontSize: 22,
        marginVertical: 10
    },
    image: {
        width: Dimensions.get('window').width * .6,
        height: Dimensions.get('window').height * .6,
        marginTop: 10,
        borderRadius: 10,
      },
      check: {
        backgroundColor: colors.medium
      },
      checkText: {
        color: colors.light
      },
    ...buttonStyles,
    
});

export default styles;
