import { Modal, View, ScrollView } from "react-native";
import createStyles from "../../style/ModalWrap";
import { useThemeStyles } from "../../app/context/ThemeContext";

const ModalWrap = ({modalVisible, closeModal, children}) => {
    const styles = useThemeStyles(createStyles);

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

