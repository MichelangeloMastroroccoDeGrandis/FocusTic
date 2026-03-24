import { useState } from 'react';
import { Card, CheckBox } from '@rneui/themed';
import { Text } from '@rneui/base';
import CardTextContent from './CardTextContent';
import CardImageContent from './CardImageContent';
import CardVideoContent from './CardVideoContent';
import CardAudioContent from './CardAudioContent';
import createStyles from '../../style/CardWrapToCheck';
import { useThemeColors, useThemeStyles } from '../../app/context/ThemeContext';

const CardWrapToCheck = ({input, checked, handleCheckboxToggle}) => {
    const {step, content, type, id, timer, hours, minutes, seconds, title } = input;
    const [isChecked, setIsChecked] = useState(checked);
    const [countdownFinished, setCountdownFinished] = useState(false);
    const colors = useThemeColors();
    const styles = useThemeStyles(createStyles);

    console.log(timer)

    const handleCountdownFinish = () => {
        setCountdownFinished(true);
        setIsChecked(true);
        handleCheckboxToggle(id);  // Ensure parent state updates too
    };

    return (
        <Card containerStyle={[styles.container]}>
            <Text style={styles.step}>Step {step}: {title} {'\n'}</Text>
    
            {type === 'text' &&  
                <CardTextContent   
                    content={content} 
                    timer={timer} 
                    hours={hours} 
                    minutes={minutes} 
                    seconds={seconds} 
                    onCountdownFinish={handleCountdownFinish}
                />
            }
            {type === 'image' && <CardImageContent content={content} />}
            {type === 'video' && <CardVideoContent content={content} />}
            {type === 'audio' && <CardAudioContent content={content} />}
    
            {/* ✅ Show checkbox based on conditions */}
            {(
                // Always show for 'image', 'video', 'audio'
                type === 'image' || type === 'video' || type === 'audio' ||
                // Show for 'text' if timer is undefined
                (type === 'text' && timer === undefined) ||
                // Show for 'text' if timer is true and countdown has finished
                (type === 'text' && timer === true && countdownFinished)
            ) && (
                <CheckBox
                    checked={checked}
                    onPress={() => {
                        const newCheckedState = !isChecked;
                        setIsChecked(newCheckedState);
                        handleCheckboxToggle(id);
                    }}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor={colors.gold}
                    containerStyle={styles.check}
                    textStyle={styles.checkText}
                    title="Done"
                />
            )}
        </Card>
    );
    
    
}

export default CardWrapToCheck
