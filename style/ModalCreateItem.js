import { StyleSheet } from "react-native";
import buttonStyles from "./ButtonStyle";
import colors from "./colors";
import { Dimensions } from "react-native";


const styles = StyleSheet.create({
    text: {
        color: colors.light,
        textAlign: 'center',
        fontSize: 22
    },
    input: {
        height: 40,
        backgroundColor: colors.medium,
        borderColor: colors.gold,
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: colors.light,
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
