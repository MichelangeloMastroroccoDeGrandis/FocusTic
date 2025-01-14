import { Text, TextInput, Button, TouchableOpacity } from 'react-native';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from "../../utils/ModalWrap"
import styles from '../../../style/ModalCreateItem';
import colors from '../../../style/colors';

const ModalCreateText = ({modalVisible, 
    inputValue, 
    handleInputChange, 
    AddItemAndCloseModal, 
    closeModal}) => {
        return(
            <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
                <Text style={styles.text}>Add Text</Text>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter text here"
                    placeholderTextColor={colors.light}
                />
                <TouchableOpacity style={styles.button} onPress={() => AddItemAndCloseModal('Text', inputValue)}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                
                <CloseButton closeModal={closeModal} />
            </ModalWrap>
        )
}
  
  export default ModalCreateText;