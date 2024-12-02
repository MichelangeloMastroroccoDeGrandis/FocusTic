import { View, Button, Dimensions, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { useEffect } from 'react';

const { width } = Dimensions.get('window');

const CardVideoContent = ({input}) => {
    
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        return () => {
          if (sound) {
            sound.unloadAsync(); 
          }
        };
      }, [sound]);
    return <View style={styles.contentContainer}>
            <Video
              source={{ uri: input.content }}
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
              <Button
                title={isPlaying ? 'Pause' : 'Play'}
                onPress={() => setIsPlaying(!isPlaying)}
              />
            </View>
          </View>
}

export default CardVideoContent

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'left',
    },
    video: {
      width: width * 0.6,
      height: 275,
    },
    controlsContainer: {
      paddingVertical: 10,
    },
  });