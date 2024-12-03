import { Text, Button, View, StyleSheet } from 'react-native';
import CloseButton from '../utils/CloseButton';
import ModalWrap from '../utils/ModalWrap';

const ModalCreateAudio = ({modalVisible, isRecording, startRecording, stopRecording, playRecording, recordingUri, AddItemAndCloseModal, closeModal}) => {
    return (
        <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
          <Text>Add Audio</Text>
          <View style={styles.container}>
            {isRecording ? (
              <Button title="Stop Recording" onPress={stopRecording} />
            ) : (
              <Button title="Start Recording" onPress={startRecording} />
            )}
            {recordingUri && !isRecording && (
              <>
                <Button title="Play Recording" onPress={playRecording} />
                <Button
                  title="Add Audio"
                  onPress={() => {
                    if (recordingUri) {
                      AddItemAndCloseModal('Audio', recordingUri);
                    }
                  }}
                />
              </>
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
  });
  
  export default ModalCreateAudio;