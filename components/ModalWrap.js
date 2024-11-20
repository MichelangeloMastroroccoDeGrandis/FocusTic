import { Modal, View, StyleSheet } from "react-native";

const ModalWrap = ({modalVisible, closeModal, children}) => {
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default ModalWrap;

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    }
  });