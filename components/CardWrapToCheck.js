import { Card, CheckBox } from '@rneui/themed';
import { Text } from '@rneui/base';
import { useState } from "react";
import CardTextContent from './CardTextContent';
import CardImageContent from './CardImageContent';
import CardVideoContent from './CardVideoContent';
import CardAudioContent from './CardAudioContent';

const CardWrapToCheck = ({input}) => {
    const {step, content, type} = input;
    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);

    return  <Card>
                <Text>Step: {step} Type: {type} {'\n'}</Text>
                {type === 'text' &&  <CardTextContent content={content} />}
                {type === 'image' &&  <CardImageContent content={content} />}
                {type === 'video' &&  <CardVideoContent content={content} />}
                {type === 'audio' &&  <CardAudioContent content={content} />}
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
}

export default CardWrapToCheck