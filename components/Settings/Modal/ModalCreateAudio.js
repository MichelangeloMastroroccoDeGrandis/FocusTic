import { Text, Button, View, TouchableOpacity, TextInput } from 'react-native';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from '../../utils/ModalWrap';
import styles from '../../../style/ModalCreateItem';
import colors from '../../../style/colors';

const ModalCreateAudio = ({modalVisible, isRecording, startRecording, stopRecording, playRecording, recordingUri, AddItemAndCloseModal, closeModal, inputValue, handleInputChange}) => {
    return (
        <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
          <Text style={styles.text}>Add Audio Step</Text>
          <Text style={styles.textSmall}>Title</Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Enter title here"
            placeholderTextColor={colors.light}
          />
          <View >
            {isRecording ? (
              <TouchableOpacity style={styles.buttonReverse} onPress={stopRecording}>
                <Text style={styles.buttonTextReverse}>Stop Recording</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={startRecording}>
                <Text style={styles.buttonText}>Start Recording</Text>
              </TouchableOpacity>
            )}
            {recordingUri && !isRecording && (
              <>
                <TouchableOpacity style={styles.button} onPress={playRecording}>
                  <Text style={styles.buttonText}>Play Recording</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.button} 
                  onPress={() => {
                    if (recordingUri) {
                      AddItemAndCloseModal('Audio', recordingUri);
                    }
                  }}>
                  <Text style={styles.buttonText}>Add Audio</Text>
                </TouchableOpacity>

              </>
            )}
          </View>
          <CloseButton closeModal={closeModal} />
        </ModalWrap>
      );
}

  
  export default ModalCreateAudio;