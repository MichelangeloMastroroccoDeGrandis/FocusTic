import { Text, View, Image, Button, StyleSheet } from 'react-native';
import CloseButton from '../utils/CloseButton';
import ModalWrap from '../utils/ModalWrap';

const ModalCreateImage = ({
    modalVisible, image, pickImage, AddItemAndCloseModal, closeModal }) => {
 return (
    <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
      <Text>Add Image</Text>
      <View style={styles.container}>
        {image ? (
          <>
            <Image source={{ uri: image }} style={styles.image} />
            <Button title="Add" onPress={() => { if (image) { AddItemAndCloseModal('Image', image); } }} />
          </>
        ) : (
          <Button title="Select Photo" onPress={pickImage} />
        )}
      </View>
      <CloseButton closeModal={closeModal} />
    </ModalWrap>
 )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 10,
      borderRadius: 10,
    },
  });
  
  export default ModalCreateImage;