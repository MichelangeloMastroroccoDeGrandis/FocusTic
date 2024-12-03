import { View, Button, StyleSheet  } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';

const CardAudioContent = ({content}) => {

    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudio = async (uri) => {
        if (isPlaying) {
          // If audio is already playing, stop it
          await sound.stopAsync();
          setIsPlaying(false);
        } else {
          try {
            // If audio is not playing, load and play it
            const { sound } = await Audio.Sound.createAsync(
              { uri },
              { shouldPlay: true }
            );
            setSound(sound); // Save the sound object
            await sound.playAsync();
            setIsPlaying(true);
          } catch (error) {
            console.error('Error loading audio: ', error);
          }
        }
      };

    return <View style={styles.contentContainer}>
                <Button title={isPlaying ? 'Stop Audio':'Play Audio'}
                onPress={() => handleAudio(content)}
                />
            </View>
}

export default CardAudioContent

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'left',
    }
  });