import { View, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import { useState } from 'react';
import styles from '../../style/CardVideoContent';

const CardVideoContent = ({content}) => {
    
    const [isPlaying, setIsPlaying] = useState(false);

    
    return <View style={styles.contentContainer}>
            <Video
              source={{ uri: content }}
              style={styles.video}
              shouldPlay={isPlaying}
              resizeMode="contain"
              onPlaybackStatusUpdate={(status) => {
                if (status.isPlaying !== undefined) {
                  setIsPlaying(status.isPlaying);
                }
              }}
              isLooping
            />
            <View style={styles.controlsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => setIsPlaying(!isPlaying)}>
                <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
              </TouchableOpacity>
              
            </View>
          </View>
}

export default CardVideoContent;