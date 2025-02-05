import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from '@rneui/themed';
import CloseButton from '../../utils/CloseButton';
import ModalWrap from "../../utils/ModalWrap"
import styles from '../../../style/ModalCreateItem';
import colors from '../../../style/colors';



const ModalCreateText = ({modalVisible, 
    inputValue, 
    handleInputChange, 
    AddItemAndCloseModal, 
    closeModal, 
    timer,
    setTimer}) => {

        const [hours, setHours] = useState(0);
        const [minutes, setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);

        const handleSetTimer = (timer) => {
            if(timer === false) {
                setTimer(true)
            } else {
                setTimer(false)
            }
        }

        const handleHoursChange = (text) => {
            let value = parseInt(text, 10);
            if (isNaN(value) || value < 0) {
              value = 0;
            } else if (value > 23) {
              value = 23;
            }
            setHours(value.toString());
          };

          const handleMinutesChange = (text) => {
            let value = parseInt(text, 10);
            if (isNaN(value) || value < 0) {
              value = 0;
            } else if (value > 59) {
              value = 59;
            }
            setMinutes(value.toString());
          };

          const handleSecondsChange = (text) => {
            let value = parseInt(text, 10);
            if (isNaN(value) || value < 0) {
              value = 0;
            } else if (value > 59) {
              value = 59;
            }
            setSeconds(value.toString());
          };

        return(
            <ModalWrap modalVisible={modalVisible} closeModal={closeModal}>
                <Text style={styles.text}>Add Text</Text>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter text here"
                    placeholderTextColor={colors.light}
                />
                <TouchableOpacity style={styles.button} onPress={() => AddItemAndCloseModal('Text', inputValue, timer, hours, minutes, seconds)}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                <CheckBox
                checked={timer}
                onPress={() => handleSetTimer(timer)}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="gold"
                containerStyle={styles.check}
                textStyle={styles.checkText}
                title="Add Timer"
                />

                {timer && (
                <View style={styles.timerContainer}>
                    <TextInput
                        style={styles.timerInput}
                        value={hours}
                        onChangeText={handleHoursChange}
                        keyboardType="numeric"
                        placeholder="Hours"
                        placeholderTextColor={colors.light}
                        maxLength={2}
                    />
                    <Text style={styles.colon}>:</Text>
                    <TextInput
                        style={styles.timerInput}
                        value={minutes}
                        onChangeText={handleMinutesChange}
                        keyboardType="numeric"
                        placeholder="Minutes"
                        placeholderTextColor={colors.light}
                        maxLength={2}
                    />
                    <Text style={styles.colon}>:</Text>
                    <TextInput
                        style={styles.timerInput}
                        value={seconds}
                        onChangeText={handleSecondsChange}
                        keyboardType="numeric"
                        placeholder="Seconds"
                        placeholderTextColor={colors.light}
                        maxLength={2}
                    />
                </View>
            )}
                
                <CloseButton closeModal={closeModal} />
            </ModalWrap>
        )
}
  
  export default ModalCreateText;