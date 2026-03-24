import { Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from '../../utils/ModalWrap';
import createStyles from '../../../style/ModalCreateItem';
import { useThemeColors, useThemeStyles } from '../../../app/context/ThemeContext';

const ModalCreateImage = ({
    modalVisible, image, pickImage, AddItemAndCloseModal, closeModal, inputValue, handleInputChange }) => {
 const colors = useThemeColors();
 const styles = useThemeStyles(createStyles);

 return (
    <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
      <Text style={styles.text}>Add Image Step</Text>
      <Text style={styles.textSmall}>Title</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Enter title here"
        placeholderTextColor={colors.light}
      />
      <View >
        {image ? (
          <>
            <Image style={styles.image} source={{ uri: image }}  />
            <TouchableOpacity style={styles.button} onPress={() => { if (image) { AddItemAndCloseModal('Image', image); } }}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          
        )}
      </View>
      
      <CloseButton closeModal={closeModal} />
    </ModalWrap>
 )
}


  
  export default ModalCreateImage;
