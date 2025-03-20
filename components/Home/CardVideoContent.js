import { View, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import { useState, useRef } from 'react';
import styles from '../../style/CardVideoContent';

const CardVideoContent = ({content}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPress = async () => {
        if (videoRef.current) {
            if (isPlaying) {
                await videoRef.current.pauseAsync();
            } else {
                await videoRef.current.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <View>
            <Video
                ref={videoRef}
                source={{ uri: content }}
                style={styles.video}
                useNativeControls
                resizeMode="contain"
                shouldPlay={isPlaying}
                isLooping={false}
            />
            <View style={styles.controlsContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePlayPress}>
                    <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CardVideoContent;