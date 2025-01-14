import { StyleSheet } from "react-native";
import colors from "./colors";
import { Dimensions } from "react-native";
import buttonStyles from "./ButtonStyle";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.medium
    },
    text: {
        color: colors.gold,
        textAlign: 'center',
        fontSize: 22
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
