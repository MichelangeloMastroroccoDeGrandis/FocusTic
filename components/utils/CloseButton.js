import { TouchableOpacity, Text } from "react-native";
import createStyles from "../../style/CloseButton";
import { useThemeStyles } from "../../app/context/ThemeContext";

const CloseButton = ({closeModal}) => {
    const styles = useThemeStyles(createStyles);
    
    return (
        <TouchableOpacity style={styles.button} onPress={closeModal} >
            <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
    )
}

export default CloseButton;

