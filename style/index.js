import { StyleSheet } from "react-native";
import colors from "./colors";
import buttonStyles from "./ButtonStyle";

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: colors.dark,
        paddingBottom: 40,
        paddingTop: 10, 
    },
    bottom: {
        flex: 1,
        backgroundColor: colors.dark 
    },
    ...buttonStyles
})

export default styles