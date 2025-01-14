import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../../style/CloseButton";

const CloseButton = ({closeModal}) => {
    
    return (
        <TouchableOpacity style={styles.button} onPress={closeModal} >
            <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
    )
}

export default CloseButton;

