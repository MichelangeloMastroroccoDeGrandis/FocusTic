import { Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from '../../utils/ModalWrap';
import createStyles from '../../../style/ModalCreateItem';
import { useThemeColors, useThemeStyles } from '../../../app/context/ThemeContext';

const ModalCreateVideo = ({modalVisible, video, thumbnail, pickVideo, AddItemAndCloseModal, closeModal, inputValue, handleInputChange}) => {
    const colors = useThemeColors();
    const styles = useThemeStyles(createStyles);

    return (
        <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
        <Text style={styles.text}>Add Video Step</Text>
        <Text style={styles.textSmall}>Title</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="Enter title here"
          placeholderTextColor={colors.light}
        />
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
