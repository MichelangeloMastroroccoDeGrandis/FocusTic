import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from '../../utils/ModalWrap';
import styles from '../../../style/ModalCreateItem';

const ModalCreateImage = ({
    modalVisible, image, pickImage, AddItemAndCloseModal, closeModal }) => {
 return (
    <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
      <Text style={styles.text}>Add Image</Text>
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