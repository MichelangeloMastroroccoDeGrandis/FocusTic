import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * .4,
        height: Dimensions.get('window').height * .3,
        marginTop: 10,
        alignSelf: 'center',
        resizeMode: 'cover'
    }
});

export default styles