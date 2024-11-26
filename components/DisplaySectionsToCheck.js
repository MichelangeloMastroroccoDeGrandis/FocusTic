import { Card, CheckBox } from '@rneui/themed';
import { Text } from '@rneui/base';
import { useState,useEffect } from "react";
import { Image, View, Button, StyleSheet, Dimensions  } from 'react-native';
import { Video, Audio } from 'expo-av';

const { width } = Dimensions.get('window');

const DisplaySectionsToCheck = ({input}) => {

    const [checked, setChecked] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState();

    const {step, type, content} = input;

    const toggleCheckbox = () => setChecked(!checked);

    useEffect(() => {
      return () => {
        if (sound) {
          sound.unloadAsync(); 
        }
      };
    }, [sound]);

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

    if(input.type === 'text') {
      return (
        <Card>
          <Text>Step: {step} Type: {type} {'\n'}</Text>
          <Text>Content: {content} {'\n'}</Text>
          <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
           title="Done"
          />
        </Card>
    )
    } else if (input.type === 'image') {
      return (
        <Card>
          <Text>Step: {step} Type: {type} {'\n'}</Text>
          <Image source={{ uri: input.content }} style={{width: 200, height: 200}} />
          <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
           title="Done"
          />
        </Card>
      )
    } else if (input.type === 'video') {

      return (
        <Card>
          <Text>Step: {step} Type: {type} {'\n'}</Text>
          <View style={styles.contentContainer}>
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
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
            title="Done"
          />
        </Card>
      )
    } else if (input.type === 'audio') {
      return (
        <Card>
          <Text>Step: {step} Type: {type} {'\n'}</Text>
          <View style={styles.contentContainer}>
            <Button title={isPlaying ? 'Stop Audio':'Play Audio'}
              onPress={() => handleAudio(content)}
            />
          </View>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
            title="Done"
          />
        </Card>
      )
    }
    
}

export default DisplaySectionsToCheck;

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