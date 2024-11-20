import { Card, CheckBox } from '@rneui/themed';
import { Text } from '@rneui/base';
import { useState } from "react";
import { Image, View, Button, StyleSheet, Dimensions  } from 'react-native';
import { Video } from 'expo-av';

const { width } = Dimensions.get('window');

const DisplaySectionsToCheck = ({input}) => {

    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);
    const [isPlaying, setIsPlaying] = useState(false);

    const {step, type, content} = input;

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