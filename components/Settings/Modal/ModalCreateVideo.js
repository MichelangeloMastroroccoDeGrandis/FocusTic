import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from '../../utils/ModalWrap';
import styles from '../../../style/ModalCreateItem';

const ModalCreateVideo = ({modalVisible, video, thumbnail, pickVideo, AddItemAndCloseModal, closeModal}) => {
    return (
        <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
        <Text style={styles.text}>Add Video</Text>
        <View >
            {video ? (
                <>
                    {thumbnail && (
                        <Image source={{ uri: thumbnail }}  />
                    )}
                    <Button title="Add" onPress={() => AddItemAndCloseModal('Video', video)} />
                </>
            ) : (
                <TouchableOpacity style={styles.button} onPress={pickVideo}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            )}
        </View>
        <CloseButton closeModal={closeModal} />
    </ModalWrap>
      );
}

  
  export default ModalCreateVideo;