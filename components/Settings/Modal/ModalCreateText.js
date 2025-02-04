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

        const [hours, setHours] = useState('');
        const [minutes, setMinutes] = useState('');
        const [seconds, setSeconds] = useState('');

        const handleSetTimer = (timer) => {
            if(timer === false) {
                setTimer(true)
            } else {
                setTimer(false)
            }
        }

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
                <TouchableOpacity style={styles.button} onPress={() => AddItemAndCloseModal('Text', inputValue)}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                <CheckBox
                checked={timer}
                onPress={() => handleSetTimer(timer)}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="gold"
                //containerStyle={styles.check}
                //textStyle={styles.checkText}
                title="Add Timer"
                />

                {timer && (
                <View style={styles.timerContainer}>
                    <TextInput
                        style={styles.timerInput}
                        value={hours}
                        onChangeText={setHours}
                        keyboardType="numeric"
                        placeholder="HH"
                        maxLength={2}
                    />
                    <Text style={styles.colon}>:</Text>
                    <TextInput
                        style={styles.timerInput}
                        value={minutes}
                        onChangeText={setMinutes}
                        keyboardType="numeric"
                        placeholder="MM"
                        maxLength={2}
                    />
                    <Text style={styles.colon}>:</Text>
                    <TextInput
                        style={styles.timerInput}
                        value={seconds}
                        onChangeText={setSeconds}
                        keyboardType="numeric"
                        placeholder="SS"
                        maxLength={2}
                    />
                </View>
            )}
                
                <CloseButton closeModal={closeModal} />
            </ModalWrap>
        )
}
  
  export default ModalCreateText;