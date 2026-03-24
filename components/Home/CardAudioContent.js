import { View, Text, TouchableOpacity  } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';
import createStyles from '../../style/ButtonStyle';
import { useThemeStyles } from '../../app/context/ThemeContext';

const CardAudioContent = ({content}) => {
    const styles = useThemeStyles(createStyles);

    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudio = async (uri) => {
        if (isPlaying) {
          // If audio is already playing, stop it
          await sound.stopAsync();
          setIsPlaying(false);
        } else {
          try {
      
            const { sound } = await Audio.Sound.createAsync(
              { uri },
              { shouldPlay: true }
            );
            setSound(sound); 
            await sound.playAsync();
            setIsPlaying(true);
          } catch (error) {
            console.error('Error loading audio: ', error);
          }
        }
      };

    return <View >
      <TouchableOpacity style={styles.button} onPress={() => handleAudio(content)}>
          <Text style={styles.buttonText}>{isPlaying ? 'Stop Audio':'Play Audio'}</Text>
      </TouchableOpacity>
                
            </View>
}

export default CardAudioContent

