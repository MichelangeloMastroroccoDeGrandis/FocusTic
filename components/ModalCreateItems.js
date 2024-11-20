import { StyleSheet, Text, TextInput, Button } from "react-native";
import ModalWrap from "./ModalWrap";
import CloseButton from "./CloseButton";


const ModalCreateItems = ({ 
  modalVisible, 
  inputValue, 
  handleInputChange, 
  AddItemAndCloseModal, 
  closeModal }) => {

  return (
    <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
          <Text>Add Text</Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Enter text here"
          />
          <Button title="Add" onPress={AddItemAndCloseModal} />
          <CloseButton closeModal={closeModal} />
    </ModalWrap>
  );
   
};

const styles = StyleSheet.create({
  
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default ModalCreateItems;
