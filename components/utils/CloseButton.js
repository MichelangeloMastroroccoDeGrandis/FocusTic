import { TouchableOpacity, Text, StyleSheet } from "react-native"

const CloseButton = ({closeModal}) => {
    
    return (
        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text>Close</Text>
        </TouchableOpacity>
    )
}

export default CloseButton;

const styles = StyleSheet.create({ 
    closeButton: {
      marginTop: 20,
      backgroundColor: '#f1f1f1',
      padding: 10,
    }
  });