import { StyleSheet } from "react-native";
import colors from "./colors";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * .9,
        height: 60,
        flex: 1,
        backgroundColor: colors.medium,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.gold,
        marginTop: 10
    },
    link: {
        width: '100%'
    },
    text: {
        color: colors.light,
        textAlign: 'center'
    }
})

export default styles