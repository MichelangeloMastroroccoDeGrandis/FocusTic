import { Text, View, Image, Button, StyleSheet } from 'react-native';
import CloseButton from '../utils/CloseButton';
import ModalWrap from '../utils/ModalWrap';

const ModalCreateVideo = ({modalVisible, video, thumbnail, pickVideo, AddItemAndCloseModal, closeModal}) => {
    return (
        <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
        <Text>Add Video</Text>
        <View style={styles.container}>
            {video ? (
                <>
                    {thumbnail && (
                        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
                    )}
                    <Button title="Add" onPress={() => AddItemAndCloseModal('Video', video)} />
                </>
            ) : (
                <Button title="Select Video" onPress={pickVideo} />
            )}
        </View>
        <CloseButton closeModal={closeModal} />
    </ModalWrap>
      );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    thumbnail: {
      width: 200,
      height: 200,
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: 'lightgray',
    },
  });
  
  export default ModalCreateVideo;