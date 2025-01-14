import { Modal, View, ScrollView } from "react-native";
import styles from "../../style/ModalWrap";

const ModalWrap = ({modalVisible, closeModal, children}) => {
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {children}
                </ScrollView>
            </View>
        </Modal>
    )
}

export default ModalWrap;

