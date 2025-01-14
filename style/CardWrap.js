import { StyleSheet } from "react-native";
import buttonStyles from "./ButtonStyle";
import colors from "./colors";
import { Dimensions } from "react-native";


const styles = StyleSheet.create({
   
    text: {
        color: colors.light,
        textAlign: 'left',
        fontSize: 18
    },
    image: {
        width: Dimensions.get('window').width * .6,
        height: Dimensions.get('window').height * .6,
        marginTop: 10,
        borderRadius: 10,
      },
    ...buttonStyles,
    
});

export default styles;
