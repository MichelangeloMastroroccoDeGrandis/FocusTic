import { StyleSheet } from "react-native";
import colors from "./colors";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width * .95,
        maxHeight: Dimensions.get('window').height * 0.5,
        marginHorizontal: 10,
        marginTop: 60,
        backgroundColor: colors.medium,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', 
        padding: 20, 
        borderRadius: 10,
    },
    scrollContainer: {
      padding: 20
    }
});

export default styles;
