import { Card, CheckBox } from '@rneui/themed';
import { Text } from '@rneui/base';
import { useState } from "react";
import { Image } from 'react-native';

const DisplaySectionsToCheck = ({input}) => {

    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);

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
    }
    
}

export default DisplaySectionsToCheck;