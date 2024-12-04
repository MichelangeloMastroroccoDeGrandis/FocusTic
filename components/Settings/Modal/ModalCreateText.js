import { Text, TextInput, Button, StyleSheet } from 'react-native';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from "../../utils/ModalWrap"

const ModalCreateText = ({modalVisible, 
    inputValue, 
    handleInputChange, 
    AddItemAndCloseModal, 
    closeModal}) => {
        return(
            <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
                <Text>Add Text</Text>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter text here"
                />
                <Button title="Add" onPress={() => AddItemAndCloseModal('Text', inputValue)} />
                <CloseButton closeModal={closeModal} />
            </ModalWrap>
        )
}

const styles = StyleSheet.create({
    input: {
      width: '100%',
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
  });
  
  export default ModalCreateText;