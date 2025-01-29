import { Text, TextInput, TouchableOpacity } from "react-native";
import ModalWrap from "../../utils/ModalWrap";
import CloseButton from "../../utils/CloseButton";
import styles from "../../../style/ModalCreateItems";
import colors from "../../../style/colors"

const ModalCreateItems = ({ 
  modalVisible, 
  inputValue, 
  handleInputChange, 
  AddItemAndCloseModal, 
  closeModal }) => {

  return (
    <ModalWrap style={styles.container} modalVisible={modalVisible} closeModal={closeModal}>
          <Text style={styles.text}>Add List</Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Enter text here"
            placeholderTextColor={colors.light}
          />
          <TouchableOpacity style={styles.button} onPress={AddItemAndCloseModal}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
         
          <CloseButton closeModal={closeModal} />
    </ModalWrap>
  );
   
};


export default ModalCreateItems;
