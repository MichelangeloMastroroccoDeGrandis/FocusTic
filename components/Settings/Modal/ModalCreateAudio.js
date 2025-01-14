import { Text, Button, View, TouchableOpacity } from 'react-native';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from '../../utils/ModalWrap';
import styles from '../../../style/ModalCreateItem';

const ModalCreateAudio = ({modalVisible, isRecording, startRecording, stopRecording, playRecording, recordingUri, AddItemAndCloseModal, closeModal}) => {
    return (
        <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
          <Text style={styles.text}>Add Audio</Text>
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